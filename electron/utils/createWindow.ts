import { BrowserWindow } from "electron";
import * as path from "path";
/**
 * packages.json,script中通过cross-env NODE_ENV=production设置的环境变量
 * 'production'|'development'
 */
const NODE_ENV = process.env.NODE_ENV;
/** 创建窗口方法 */
function createWindow() {
// 生成窗口实例
    const Window = new BrowserWindow({
        minWidth: 960,
        minHeight: 645,
        width: 960, // * 指定启动app时的默认窗口尺寸
        height: 645, // * 指定启动app时的默认窗口尺寸
        titleBarStyle: "hidden",
        hasShadow: true, // * app 边框阴影
        show: false, // 启动窗口时隐藏,直到渲染进程加载完成「ready-to-show 监听事件」 再显示窗口,防止加载时闪烁
        webPreferences: {
            // 加载脚本
            preload: path.join(__dirname, "..", "preload.js")
        }
    });

    // 启动窗口时隐藏,直到渲染进程加载完成「ready-to-show 监听事件」 再显示窗口,防止加载时闪烁
    Window.once("ready-to-show", () => {
        Window.show(); // 显示窗口
    });

    // * 主窗口加载外部链接
    // 开发环境,加载vite启动的vue项目地址
    if (NODE_ENV === "development") {
        console.log("dev")
        Window.loadURL("http://localhost:3920/");
    }
    else {
        console.log("pro")
        Window.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    }
}
// 导出模块
export { createWindow };