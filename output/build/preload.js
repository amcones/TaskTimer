"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
/**
 * 通信方法挂载到window对象上
 * 在渲染进程中使用:
 * <script setup lang="ts">
 * window.ipc.on('WindowID', (e, f) => console.log(e, f))
 * window.ipc.send('navBar', val)
 * </script>
 */
electron_1.contextBridge.exposeInMainWorld("ipc", {
    send: (channel, ...args) => electron_1.ipcRenderer.send(channel, ...args),
    invoke: (channel, ...args) => electron_1.ipcRenderer.invoke(channel, ...args),
    on: (channel, listener) => {
        electron_1.ipcRenderer.on(channel, listener);
    },
});
