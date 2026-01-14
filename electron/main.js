import { app, BrowserWindow, ipcMain, Menu, globalShortcut, protocol, session } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { loadData, saveData } from './persistence.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Register custom protocol scheme before app is ready
protocol.registerSchemesAsPrivileged([
  {
    scheme: 'blockly',
    privileges: {
      secure: true,
      standard: true,
      corsEnabled: true,
      supportFetchAPI: true,
    },
  },
]);

// Default data function - returns empty structure
// Lessons will be added by mergeDefaultLessons in the React app
const getDefaultDataFunc = () => {
  return {
    students: [],
    lessons: [],
    quizzes: [],
    progress: [],
    videoResources: [],
  };
};

let mainWindow;

function createWindow() {
  const isDev = !app.isPackaged;
  
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: 'Homeschool Hub',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: true,
      preload: path.join(__dirname, 'preload.js').replace(/\\/g, '/'),
    },
    show: false,
  });

  // Remove menu bar completely
  Menu.setApplicationMenu(null);
  
  // Load the app
  if (isDev) {
    // Development: load from Vite dev server
    mainWindow.loadURL('http://localhost:3000');
    // Don't auto-open dev tools, but they're still available via F12 or Ctrl+Shift+I
  } else {
    // Production: load from built files
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Failed to load:', errorCode, errorDescription);
  });
}

// IPC handlers for data persistence
ipcMain.handle('load-data', async () => {
  try {
    return await loadData(getDefaultDataFunc);
  } catch (error) {
    console.error('Error loading data:', error);
    return getDefaultDataFunc();
  }
});

ipcMain.handle('save-data', async (event, data) => {
  try {
    await saveData(data);
    return { success: true };
  } catch (error) {
    console.error('Error saving data:', error);
    return { success: false, error: error.message };
  }
});

// Register custom protocol for serving blockly-games files
function registerBlocklyProtocol() {
  const isDev = !app.isPackaged;
  
  protocol.registerFileProtocol('blockly', (request, callback) => {
    let url = request.url.replace('blockly://', '').replace(/\/$/, ''); // Remove trailing slash
    
    // Handle relative paths that don't include the full blockly-games path
    // When browser resolves relative paths in custom protocols, it sometimes
    // resolves them incorrectly (e.g., common/storage.js from blockly-games/en/maze.html
    // might resolve to blockly-games/common/storage.js instead of blockly-games/en/common/storage.js)
    
    // Check for mis-resolved paths that should be in en/common/ but are in common/
    // This handles: blockly-games/common/storage.js -> blockly-games/en/common/storage.js
    if (url.startsWith('blockly-games/common/')) {
      // This is a mis-resolved relative path - fix it to include 'en/'
      url = url.replace('blockly-games/common/', 'blockly-games/en/common/');
    } 
    // Check for any blockly-games path that references common/ but doesn't have en/ in it
    else if (url.startsWith('blockly-games/') && 
             !url.includes('/en/') && 
             url.includes('/common/')) {
      // Another case of mis-resolved path - insert 'en/' after 'blockly-games/'
      url = url.replace('blockly-games/', 'blockly-games/en/');
    }
    
    // Ensure it starts with blockly-games
    if (!url.startsWith('blockly-games/')) {
      url = 'blockly-games/' + url;
    }
    
    let filePath;
    
    if (isDev) {
      // Development: serve from public folder
      filePath = path.join(__dirname, '../public', url);
    } else {
      // Production: serve from dist folder (packaged in resources)
      // In packaged app, dist folder is at resources/app/dist
      const appPath = app.getAppPath();
      filePath = path.join(appPath, 'dist', url);
    }
    
    // Normalize path separators for Windows
    filePath = path.normalize(filePath);
    
    console.log('[Blockly Protocol] Request:', request.url);
    console.log('[Blockly Protocol] Resolved URL:', url);
    console.log('[Blockly Protocol] File Path:', filePath);
    
    // Check if file exists, if not, try to find it
    if (!fs.existsSync(filePath)) {
      console.warn('[Blockly Protocol] File not found:', filePath);
      // Try alternative paths
      const alternatives = [
        path.join(__dirname, '../public/blockly-games/en/common/storage.js'),
        path.join(__dirname, '../public', url.replace('blockly-games/', '')),
      ];
      
      for (const altPath of alternatives) {
        const normalizedAlt = path.normalize(altPath);
        if (fs.existsSync(normalizedAlt)) {
          console.log('[Blockly Protocol] Using alternative path:', normalizedAlt);
          callback({ path: normalizedAlt });
          return;
        }
      }
      
      console.error('[Blockly Protocol] File not found and no alternatives found:', filePath);
      callback({ error: -6 }); // FILE_NOT_FOUND
      return;
    }
    
    callback({ path: filePath });
  });
}

// Modify CSP headers to allow blockly:// protocol and be more permissive for frames
function setupCSPModification() {
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    const responseHeaders = { ...details.responseHeaders };
    
    // Modify CSP to allow custom protocols in frames and YouTube embeds
    if (responseHeaders['content-security-policy']) {
      // Replace existing CSP with one that allows blockly://, Pyodide CDN, and YouTube
      responseHeaders['content-security-policy'] = [
        "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: file: blockly: https://www.gstatic.com https://fonts.gstatic.com https://cdn.jsdelivr.net; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com https://cdn.jsdelivr.net https://www.youtube.com https://s.ytimg.com https://static.doubleclick.net https://www.google.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "connect-src 'self' https://www.gstatic.com https://fonts.gstatic.com https://cdn.jsdelivr.net https://www.youtube.com https://*.googlevideo.com https://*.doubleclick.net https://*.googleadservices.com https://*.google.com; " +
        "img-src 'self' data: blob: file: https:; " +
        "font-src 'self' data: file: https://fonts.gstatic.com; " +
        "worker-src 'self' blob:; " +
        "child-src 'self' blob:; " +
        "frame-src *; "  // Allow all sources in frames (needed for custom protocols and YouTube)
      ];
    }
    
    // Filter out problematic Permissions-Policy headers with unrecognized features
    // This prevents console errors about 'ch-ua-form-factors' and similar features
    if (responseHeaders['permissions-policy']) {
      const policies = responseHeaders['permissions-policy'];
      if (Array.isArray(policies)) {
        // Filter out policies with unrecognized features
        responseHeaders['permissions-policy'] = policies.map(policy => {
          if (typeof policy === 'string') {
            // Remove problematic features like 'ch-ua-form-factors'
            const filtered = policy.split(',').filter(p => {
              const trimmed = p.trim();
              return !trimmed.includes('ch-ua-form-factors') && trimmed.length > 0;
            }).join(',');
            return filtered || undefined;
          }
          return policy;
        }).filter(p => p !== undefined && p !== '');
      } else if (typeof policies === 'string') {
        // Handle single string policy
        const filtered = policies.split(',').filter(p => {
          const trimmed = p.trim();
          return !trimmed.includes('ch-ua-form-factors') && trimmed.length > 0;
        }).join(',');
        if (filtered) {
          responseHeaders['permissions-policy'] = [filtered];
        } else {
          delete responseHeaders['permissions-policy'];
        }
      }
    }
    
    // Add Permissions-Policy header to suppress warnings about unrecognized features
    // This allows YouTube embeds to work without console warnings
    if (!responseHeaders['permissions-policy']) {
      responseHeaders['permissions-policy'] = [];
    }
    // Add ch-ua-form-factors to suppress the warning (even if not fully supported)
    const existingPermissions = Array.isArray(responseHeaders['permissions-policy']) 
      ? responseHeaders['permissions-policy'][0] || ''
      : responseHeaders['permissions-policy'] || '';
    responseHeaders['permissions-policy'] = [
      existingPermissions + (existingPermissions ? ', ' : '') + 'ch-ua-form-factors=*'
    ];
    
    callback({ responseHeaders });
  });
}

app.whenReady().then(() => {
  // Setup CSP modification to allow blockly:// protocol
  setupCSPModification();
  
  // Register custom protocol before creating window
  registerBlocklyProtocol();
  
  createWindow();

  // Register keyboard shortcuts for dev tools
  globalShortcut.register('CommandOrControl+Shift+I', () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
      focusedWindow.webContents.toggleDevTools();
    }
  });
  
  // Also register F12
  globalShortcut.register('F12', () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
      focusedWindow.webContents.toggleDevTools();
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  // Unregister all shortcuts when app closes
  globalShortcut.unregisterAll();
  
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  // Unregister all shortcuts before quitting
  globalShortcut.unregisterAll();
});

app.on('web-contents-created', (event, contents) => {
  contents.on('new-window', (event, navigationUrl) => {
    event.preventDefault();
    require('electron').shell.openExternal(navigationUrl);
  });
});

