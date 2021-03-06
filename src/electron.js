const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu
const path = require("path");
const isDev = require("electron-is-dev");

const Datastore = require('nedb');
let db = {};
db.students = new Datastore({
    filename:'./students.json',
    autoload: true
})
db.students.insert({name : "Putin V.V.", year: 1952});
// global.database = db;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 900,
        minHeight: 600,
        show: false,
        icon: ""
    });
    mainWindow.webContents.openDevTools()
    Menu.setApplicationMenu(null);

    mainWindow.loadURL(
        isDev ?
        "http://localhost:3000" :
        `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});


ipc.on('update-notify-value', function (event, arg) {
    win.webContents.send('targetPriceVal', arg)
  })