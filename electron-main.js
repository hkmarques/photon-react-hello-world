const url = require('url');
const path = require('path');

// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron');

const WEBPACK_DEV_URL = 'http://localhost:3000';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      { label: 'Option 1' },
      { role: 'reload' },
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  },
  {
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform === 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      }
    ]
  }
];

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 400,
    minWidth: 800,
    minHeight: 400,
    titleBarStyle: 'hidden'
  });

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html');
  const startURL =
    process.env.NODE_ENV === 'dev'
      ? WEBPACK_DEV_URL
      : url.format({
          pathname: path.join(__dirname, '/build/index.html'),
          protocol: 'file:',
          slashes: true
        });

  mainWindow.loadURL(startURL);

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
    app.quit();
  });

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

  // Insert menu
  Menu.setApplicationMenu(mainMenu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
