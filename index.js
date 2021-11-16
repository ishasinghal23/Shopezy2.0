//imported the required library, ipc main for communication, app for desktop software and browser window for v8 engine support 
const { ipcMain, app, BrowserWindow } = require("electron");
const path = require("path");

let welcomeWindow


function createWelcomeWindow() {
    // Create the browser window.
    welcomeWindow = new BrowserWindow({
      width: 800,
      height: 600,
      //frame: false,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
        preload: path.join(__dirname, "script/welcome_screen.js"),
      },
    });
    welcomeWindow.loadFile("pages/welcome_screen.html");
    welcomeWindow.maximize();
  }

//when app is ready create welcome screen
  app.whenReady().then(() => {
    createWelcomeWindow();
  });