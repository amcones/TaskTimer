"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
// 创建窗口方法
const createWindow_1 = require("./utils/createWindow");
const dbOperator_1 = require("./utils/dbOperator");
async function handleGetOnGoingTasks() {
    return await (0, dbOperator_1.selectOnGoingTaskInfo)();
}
async function handleHistoryTasks() {
    return await (0, dbOperator_1.selectHistoryTaskInfo)();
}
electron_1.app.on("ready", () => {
    electron_1.ipcMain.handle('getOnGoingTasks', handleGetOnGoingTasks);
    electron_1.ipcMain.handle('getHistoryTasks', handleHistoryTasks);
    electron_1.ipcMain.handle('updateTaskInfo', async (e, taskId, duration, isGoing, isCompleted) => {
        return await (0, dbOperator_1.updateTaskInfo)(taskId, duration, isGoing, isCompleted);
    });
    electron_1.ipcMain.handle('insertTaskInfo', async (e, taskName) => {
        return await (0, dbOperator_1.insertTaskInfo)(taskName);
    });
    electron_1.ipcMain.handle('deleteTask', async (e, taskID) => {
        return await (0, dbOperator_1.deleteTask)(taskID);
    });
    (0, createWindow_1.createWindow)(); // 创建窗口
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他打开的窗口，那么程序会重新创建一个窗口。
    electron_1.app.on("activate", () => electron_1.BrowserWindow.getAllWindows().length === 0 && (0, createWindow_1.createWindow)());
});
// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 macOS窗口全部关闭时,dock中程序不会退出
electron_1.app.on("window-all-closed", () => {
    process.platform !== "darwin" && electron_1.app.quit();
});
