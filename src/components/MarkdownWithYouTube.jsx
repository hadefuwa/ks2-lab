import React from 'react';
import ReactMarkdown from 'react-markdown';
import YouTubeEmbed from './YouTubeEmbed';
import InteractiveQuestion from './InteractiveQuestion';
import { extractYouTubeVideosFromContent } from '../utils/youtube';

/**
 * Markdown component that automatically embeds YouTube videos
 * Replaces YouTube links with embedded video players
 */
function MarkdownWithYouTube({ content, removeTitle = true, onQuestionAnswer }) {
  if (!content) return null;

  // Extract all YouTube videos from content
  const videos = extractYouTubeVideosFromContent(content);
  
  // Extract interactive questions from content
  const questionRegex = /<!-- QUESTION_START -->\s*([\s\S]*?)\s*<!-- OPTIONS -->\s*([\s\S]*?)\s*<!-- CORRECT -->\s*(\d+)\s*(?:<!-- EXPLANATION -->\s*([\s\S]*?))?\s*<!-- QUESTION_END -->/g;
  const questions = [];
  const questionMatches = [];
  let match;
  
  // Reset regex lastIndex to ensure we get all matches
  questionRegex.lastIndex = 0;
  
  while ((match = questionRegex.exec(content)) !== null) {
    const questionIndex = questions.length;
    questions.push({
      question: match[1].trim(),
      options: match[2].split('|').map(opt => opt.trim()),
      correctIndex: parseInt(match[3]),
      explanation: match[4] ? match[4].trim() : null,
    });
    
    questionMatches.push({
      fullMatch: match[0],
      index: match.index,
      questionIndex: questionIndex,
    });
  }
  
  // Helper function to remove title from content if needed
  const removeTitleFromContent = (contentText) => {
    if (!removeTitle) return contentText;
    
    const lines = contentText.split('\n');
    let titleRemoved = false;
    return lines
      .filter((line, index) => {
        // Skip the first line if it starts with #
        if (!titleRemoved && line.trim().startsWith('#')) {
          titleRemoved = true;
          return false;
        }
        // Skip the next line if it's empty and we just removed a title
        if (titleRemoved && index === 1 && line.trim() === '') {
          return false;
        }
        return true;
      })
      .join('\n')
      .trim();
  };

  // Helper function to split content and insert YouTube embeds
  const processContentWithVideos = (contentText, segmentStartIndex = 0, isFirstSegment = false) => {
    // Filter videos that are within this segment
    const segmentEndIndex = segmentStartIndex + contentText.length;
    const segmentVideos = videos
      .filter(video => video.index >= segmentStartIndex && video.index < segmentEndIndex)
      .map(video => ({
        ...video,
        // Adjust index to be relative to segment start
        relativeIndex: video.index - segmentStartIndex,
      }))
      .sort((a, b) => a.relativeIndex - b.relativeIndex);

    if (segmentVideos.length === 0) {
      return [{
        type: 'markdown',
        content: isFirstSegment ? removeTitleFromContent(contentText) : contentText,
      }];
    }
    
    const elements = [];
    let lastIndex = 0;
    let titleRemoved = false;

    segmentVideos.forEach((video) => {
      // Add markdown content before this video
      if (video.relativeIndex > lastIndex) {
        const beforeContent = contentText.substring(lastIndex, video.relativeIndex);
        const processedContent = isFirstSegment && !titleRemoved 
          ? removeTitleFromContent(beforeContent)
          : beforeContent;
        
        if (isFirstSegment) titleRemoved = true;
        
        if (processedContent.trim()) {
          elements.push({
            type: 'markdown',
            content: processedContent,
          });
        }
      }
      
      // Add YouTube embed
      elements.push({
        type: 'youtube',
        videoId: video.id,
      });
      
      // Move past the YouTube link
      lastIndex = video.relativeIndex + video.fullMatch.length;
    });
    
    // Add remaining markdown content
    if (lastIndex < contentText.length) {
      const remainingContent = contentText.substring(lastIndex);
      if (remainingContent.trim()) {
        elements.push({
          type: 'markdown',
          content: remainingContent,
        });
      }
    }
    
    // If no videos were found in this segment, just return the markdown
    if (elements.length === 0) {
      return [{
        type: 'markdown',
        content: isFirstSegment ? removeTitleFromContent(contentText) : contentText,
      }];
    }
    
    return elements;
  };

  // Split content into segments (markdown, questions, and YouTube videos)
  const segments = [];
  let lastIndex = 0;
  let isFirstSegment = true;
  
  if (questionMatches.length > 0) {
    questionMatches.forEach((qm) => {
      // Add markdown content before this question (may include YouTube videos)
      if (qm.index > lastIndex) {
        const segmentContent = content.substring(lastIndex, qm.index);
        const processedElements = processContentWithVideos(segmentContent, lastIndex, isFirstSegment);
        segments.push(...processedElements);
        isFirstSegment = false;
      }
      
      // Add question
      segments.push({
        type: 'question',
        questionIndex: qm.questionIndex,
      });
      
      lastIndex = qm.index + qm.fullMatch.length;
    });
    
    // Add remaining markdown content
    if (lastIndex < content.length) {
      const segmentContent = content.substring(lastIndex);
      const processedElements = processContentWithVideos(segmentContent, lastIndex, isFirstSegment);
      segments.push(...processedElements);
    }
  } else {
    // No questions, just render all content with YouTube videos
    const processedElements = processContentWithVideos(content, 0, true);
    segments.push(...processedElements);
  }

  // Custom renderer for ReactMarkdown
  const components = {
    p: ({ children, ...props }) => {
      // Regular paragraph - check if it's just whitespace or empty
      const text = typeof children === 'string' 
        ? children 
        : React.Children.toArray(children).join('');
      
      if (!text || text.trim() === '') {
        return null;
      }
      
      return <p {...props}>{children}</p>;
    },
  };

  return (
    <div className="markdown-content" style={{
      fontSize: '16px',
      lineHeight: '1.8',
      color: '#333',
    }}>
      {segments.map((segment, idx) => {
        if (segment.type === 'question') {
          const question = questions[segment.questionIndex];
          if (question) {
            return (
              <InteractiveQuestion
                key={`question-${segment.questionIndex}-${idx}`}
                questionId={segment.questionIndex}
                question={question.question}
                options={question.options}
                correctIndex={question.correctIndex}
                explanation={question.explanation}
                onAnswer={onQuestionAnswer}
              />
            );
          }
          return null;
        } else if (segment.type === 'youtube') {
          return (
            <YouTubeEmbed 
              key={`youtube-${segment.videoId}-${idx}`} 
              videoId={segment.videoId} 
            />
          );
        } else {
          return (
            <ReactMarkdown key={`markdown-${idx}`} components={components}>
              {segment.content}
            </ReactMarkdown>
          );
        }
      })}
    </div>
  );
}

export default MarkdownWithYouTube;

