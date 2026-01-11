import { create } from 'zustand';
import { AppData } from '../models/AppData.js';
import { Lesson } from '../models/Lesson.js';
import { Quiz } from '../models/Quiz.js';
import { Progress } from '../models/Progress.js';
import { Student } from '../models/Student.js';
import { Year } from '../models/Year.js';
import { getDefaultData } from '../data/defaultData.js';

const useDataStore = create((set, get) => ({
  // State
  data: null,
  initialized: false,
  loading: false,
  adminMode: false,

  // Initialize the store
  initialize: async () => {
    const state = get();
    if (state.initialized || state.loading) return;

    set({ loading: true });

    try {
      // Load data from Electron
      let loadedData;
      if (window.electronAPI) {
        loadedData = await window.electronAPI.loadData();
      } else {
        // Fallback for web mode (development)
        console.warn('Electron API not available, using default data');
        loadedData = getDefaultData();
      }

      // Convert to AppData instance
      const appData = AppData.fromJSON(loadedData);

      // Merge default lessons (add any missing lessons)
      await state._mergeDefaultLessons(appData);

      set({ 
        data: appData, 
        initialized: true, 
        loading: false 
      });
    } catch (error) {
      console.error('Error initializing data store:', error);
      const defaultData = AppData.fromJSON(getDefaultData());
      set({ 
        data: defaultData, 
        initialized: true, 
        loading: false 
      });
    }
  },

  // Merge default lessons into existing data
  _mergeDefaultLessons: async (appData) => {
    const defaultData = AppData.fromJSON(getDefaultData());
    const existingLessonIds = new Set(appData.lessons.map(l => l.id));
    const existingQuizIds = new Set(appData.quizzes.map(q => q.id));
    
    // Create a map of existing lessons by year/subject/lessonNumber for better matching
    const existingLessonsMap = new Map();
    appData.lessons.forEach(lesson => {
      const key = `${lesson.yearId}|${lesson.subjectId}|${lesson.lessonNumber}`;
      existingLessonsMap.set(key, lesson);
    });

    let hasChanges = false;

    // Add missing lessons - check both by ID and by year/subject/lessonNumber
    for (const defaultLesson of defaultData.lessons) {
      const key = `${defaultLesson.yearId}|${defaultLesson.subjectId}|${defaultLesson.lessonNumber}`;
      const existingByKey = existingLessonsMap.get(key);
      
      // Add if not found by ID AND not found by year/subject/lessonNumber
      if (!existingLessonIds.has(defaultLesson.id) && !existingByKey) {
        appData.lessons.push(defaultLesson);
        hasChanges = true;
      } else if (existingByKey && existingByKey.title !== defaultLesson.title) {
        // Update existing lesson if title changed (e.g., clicking game was added)
        const index = appData.lessons.findIndex(l => l.id === existingByKey.id);
        if (index !== -1) {
          appData.lessons[index] = defaultLesson;
          hasChanges = true;
        }
      }
    }
    
    // Deduplicate lessons - remove any duplicates based on year/subject/lessonNumber/categoryId
    // Keep the first occurrence, but prefer default lessons if they exist
    const seenKeys = new Set();
    const deduplicatedLessons = [];
    const defaultLessonsMap = new Map();
    defaultData.lessons.forEach(dl => {
      const key = `${dl.yearId}|${dl.subjectId}|${dl.lessonNumber}|${dl.categoryId || ''}`;
      defaultLessonsMap.set(key, dl);
    });
    
    for (const lesson of appData.lessons) {
      const key = `${lesson.yearId}|${lesson.subjectId}|${lesson.lessonNumber}|${lesson.categoryId || ''}`;
      if (!seenKeys.has(key)) {
        seenKeys.add(key);
        // Prefer default lesson if it exists for this key
        const defaultLesson = defaultLessonsMap.get(key);
        if (defaultLesson) {
          deduplicatedLessons.push(defaultLesson);
        } else {
          deduplicatedLessons.push(lesson);
        }
      }
    }
    
    if (deduplicatedLessons.length !== appData.lessons.length) {
      appData.lessons = deduplicatedLessons;
      hasChanges = true;
    }

    // Add missing quizzes
    for (const defaultQuiz of defaultData.quizzes) {
      if (!existingQuizIds.has(defaultQuiz.id)) {
        appData.quizzes.push(defaultQuiz);
        hasChanges = true;
      }
    }

    // Save if changes were made
    if (hasChanges && window.electronAPI) {
      try {
        const jsonData = appData.toJSON();
        await window.electronAPI.saveData(jsonData);
      } catch (error) {
        console.error('Error saving merged data:', error);
      }
    }
  },

  // Save data to file
  saveData: async () => {
    const state = get();
    if (!state.data) return;

    try {
      // Ensure data is an AppData instance, convert if needed
      let appData = state.data;
      if (!(appData instanceof AppData)) {
        console.warn('Data is not an AppData instance, converting...');
        appData = AppData.fromJSON(state.data);
        // Update state with the proper instance
        set({ data: appData });
      }
      
      const jsonData = appData.toJSON();
      
      if (window.electronAPI) {
        await window.electronAPI.saveData(jsonData);
      } else {
        console.warn('Electron API not available, cannot save data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      throw error;
    }
  },

  // Student operations
  getUserId: () => {
    const state = get();
    if (!state.data) {
      // Data not initialized yet, return default ID
      return 1;
    }
    
    if (state.data.students.length === 0) {
      // Create default student if none exists
      const defaultStudent = new Student({
        id: 1,
        name: 'Student',
        age: 5,
        createdAt: new Date(),
      });
      state.data.students.push(defaultStudent);
      // Save asynchronously without blocking
      state.saveData().catch(err => console.error('Error saving default student:', err));
      return 1;
    }
    return state.data.students[0].id; // Return first student's ID
  },

  // Lesson operations
  getLesson: (id) => {
    const state = get();
    if (!state.data) return null;
    return state.data.lessons.find(l => l.id === id) || null;
  },

  getLessons: ({ yearId, subjectId, category, ageGroup } = {}) => {
    const state = get();
    if (!state.data) return [];
    
    let lessons = [...state.data.lessons];
    
    if (yearId) {
      lessons = lessons.filter(l => l.yearId === yearId);
    }
    if (subjectId) {
      lessons = lessons.filter(l => l.subjectId === subjectId);
    }
    if (category) {
      lessons = lessons.filter(l => l.subjectId === category.toLowerCase());
    }
    if (ageGroup) {
      const yearMap = {
        3: 'nursery',
        4: 'reception',
        5: 'year1',
        6: 'year1',
        7: 'year2',
        8: 'year2',
        9: 'year3',
        10: 'year3',
        11: 'year4',
        12: 'year4',
        13: 'year5',
        14: 'year5',
        15: 'year6',
        16: 'year6',
      };
      const mappedYear = yearMap[ageGroup];
      if (mappedYear) {
        lessons = lessons.filter(l => l.yearId === mappedYear);
      }
    }
    
    return lessons.sort((a, b) => a.lessonNumber - b.lessonNumber);
  },

  getAllLessonsForSubject: (subjectId) => {
    const state = get();
    if (!state.data) return [];
    
    const allLessons = state.data.lessons
      .filter(l => l.subjectId === subjectId)
      .map(l => l);
    
    // Sort by year order, then by lesson number
    allLessons.sort((a, b) => {
      const yearA = Year.getById(a.yearId);
      const yearB = Year.getById(b.yearId);
      const yearOrderA = yearA?.order ?? 999;
      const yearOrderB = yearB?.order ?? 999;
      
      if (yearOrderA !== yearOrderB) {
        return yearOrderA - yearOrderB;
      }
      
      return a.lessonNumber - b.lessonNumber;
    });
    
    return allLessons;
  },

  getNextLessonForSubject: (subjectId, studentId = null) => {
    const state = get();
    if (!state.data) return null;
    
    const userId = studentId || state.getUserId();
    
    if (state.adminMode) {
      const allLessons = state.getAllLessonsForSubject(subjectId);
      return allLessons.length > 0 ? allLessons[0] : null;
    }
    
    const allLessons = state.getAllLessonsForSubject(subjectId);
    
    for (const lesson of allLessons) {
      if (!state.hasCompletedLesson(userId, lesson.yearId, lesson.subjectId, lesson.lessonNumber)) {
        return lesson;
      }
    }
    
    return null; // All lessons completed
  },

  getNextLessonAfter: (currentLesson) => {
    const state = get();
    if (!state.data || !currentLesson) return null;
    
    const allLessons = state.getAllLessonsForSubject(currentLesson.subjectId);
    const currentIndex = allLessons.findIndex(l => 
      l.id === currentLesson.id ||
      (l.yearId === currentLesson.yearId && 
       l.subjectId === currentLesson.subjectId && 
       l.lessonNumber === currentLesson.lessonNumber &&
       (l.categoryId === currentLesson.categoryId || (!l.categoryId && !currentLesson.categoryId)))
    );
    
    if (currentIndex === -1 || currentIndex === allLessons.length - 1) {
      return null; // Current lesson not found or it's the last one
    }
    
    return allLessons[currentIndex + 1];
  },

  // Quiz operations
  getQuiz: (id) => {
    const state = get();
    if (!state.data) return null;
    return state.data.quizzes.find(q => q.id === id) || null;
  },

  // Progress operations
  addProgress: async (progress) => {
    const state = get();
    if (!state.data) return;
    
    // Check if progress already exists
    const existingIndex = state.data.progress.findIndex(
      p => p.studentId === progress.studentId &&
           p.activityType === progress.activityType &&
           p.activityId === progress.activityId
    );
    
    if (existingIndex !== -1) {
      // Update existing progress
      state.data.progress[existingIndex] = progress;
    } else {
      // Add new progress
      state.data.progress.push(progress);
    }
    
    // Create a new AppData instance to maintain the toJSON method
    // This ensures the instance is preserved when state updates
    const updatedData = new AppData({
      students: state.data.students,
      lessons: state.data.lessons,
      quizzes: state.data.quizzes,
      progress: state.data.progress,
      videoResources: state.data.videoResources,
    });
    
    // Update state with the new AppData instance
    set({ data: updatedData });
    
    // Save the updated data using the saveData function
    await state.saveData();
  },

  getNextProgressId: () => {
    const state = get();
    if (!state.data || state.data.progress.length === 0) return 1;
    return Math.max(...state.data.progress.map(p => p.id)) + 1;
  },

  hasCompletedLesson: (studentId, yearId, subjectId, lessonNumber) => {
    const state = get();
    if (!state.data) return false;
    
    return state.data.progress.some(p =>
      p.studentId === studentId &&
      p.activityType === 'Lesson' &&
      p.yearId === yearId &&
      p.subjectId === subjectId &&
      p.lessonNumber === lessonNumber &&
      p.isCompleted
    );
  },

  hasCompletedActivity: (studentId, activityType, activityId) => {
    const state = get();
    if (!state.data) return false;
    
    return state.data.progress.some(p =>
      p.studentId === studentId &&
      p.activityType === activityType &&
      p.activityId === activityId &&
      p.isCompleted
    );
  },

  getSubjectProgress: (subjectId, studentId = null) => {
    const state = get();
    if (!state.data) {
      return {
        totalLessons: 0,
        completedCount: 0,
        currentYearId: null,
        currentLessonNumber: null,
        nextLesson: null,
        progressPercentage: 0,
      };
    }
    
    const userId = studentId || state.getUserId();
    const allLessons = state.getAllLessonsForSubject(subjectId);
    
    let completedCount = 0;
    let currentYearId = null;
    let currentLessonNumber = null;
    
    for (const lesson of allLessons) {
      if (state.hasCompletedLesson(userId, lesson.yearId, lesson.subjectId, lesson.lessonNumber)) {
        completedCount++;
        currentYearId = lesson.yearId;
        currentLessonNumber = lesson.lessonNumber;
      } else {
        break; // Found first uncompleted lesson
      }
    }
    
    const nextLesson = state.getNextLessonForSubject(subjectId, userId);
    
    return {
      totalLessons: allLessons.length,
      completedCount,
      currentYearId,
      currentLessonNumber,
      nextLesson,
      progressPercentage: allLessons.length === 0 ? 0 : (completedCount / allLessons.length) * 100,
    };
  },

  trackLessonAccess: async (lesson) => {
    const state = get();
    if (!state.data || !lesson) return;
    
    const userId = state.getUserId();
    
    // Check if already accessed
    const existingProgress = state.data.progress.find(
      p => p.studentId === userId &&
           p.activityType === 'Lesson' &&
           p.activityId === lesson.id
    );
    
    if (!existingProgress) {
      // Create new progress entry for accessing the lesson
      const progressId = state.getNextProgressId();
      const progress = new Progress({
        id: progressId,
        studentId: userId,
        activityType: 'Lesson',
        activityId: lesson.id,
        yearId: lesson.yearId,
        subjectId: lesson.subjectId,
        lessonNumber: lesson.lessonNumber,
        isCompleted: false,
        completedAt: null,
        score: null,
      });
      
      await state.addProgress(progress);
    }
  },

  getStatistics: (studentId = null) => {
    const state = get();
    if (!state.data) {
      return {
        totalCompleted: 0,
        totalQuizzes: 0,
        averageScore: 0,
        byYear: {},
        bySubject: {},
      };
    }
    
    const userId = studentId || state.getUserId();
    const allProgress = state.data.progress.filter(p => p.studentId === userId);
    const completed = allProgress.filter(p => p.isCompleted);
    const quizzes = completed.filter(p => 
      p.activityType === 'Quiz' || 
      p.activityType === 'Test' || 
      p.activityType === 'Challenge'
    );
    
    const totalQuizzes = quizzes.length;
    const averageScore = totalQuizzes > 0
      ? quizzes.reduce((sum, p) => sum + (p.score || 0), 0) / totalQuizzes
      : 0;
    
    // Group by year
    const byYear = {};
    for (const p of completed) {
      if (p.yearId) {
        if (!byYear[p.yearId]) {
          byYear[p.yearId] = [];
        }
        byYear[p.yearId].push(p);
      }
    }
    
    // Group by subject
    const bySubject = {};
    for (const p of completed) {
      if (p.subjectId) {
        if (!bySubject[p.subjectId]) {
          bySubject[p.subjectId] = [];
        }
        bySubject[p.subjectId].push(p);
      }
    }
    
    return {
      totalCompleted: completed.length,
      totalQuizzes,
      averageScore,
      byYear,
      bySubject,
    };
  },

  // Admin mode
  toggleAdminMode: () => {
    set(state => ({ adminMode: !state.adminMode }));
  },

  setAdminMode: (enabled) => {
    set({ adminMode: enabled });
  },
}));

export default useDataStore;
