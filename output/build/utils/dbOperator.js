"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskInfo = exports.selectHistoryTaskInfo = exports.selectOnGoingTaskInfo = exports.insertTaskInfo = void 0;
const path = __importStar(require("path"));
const dbConnect_1 = require("./dbConnect");
const userDbPath = path.join("./db", "tasks.sqlite");
async function insertTaskInfo(data = {}) {
    const dbInfo = await (0, dbConnect_1.connectDb)(userDbPath);
    let taskName = "aaa";
    const sql = `insert into tasks (taskName) values (${taskName})`;
    let res = null;
    try {
        const runRes = await dbInfo.run(sql);
        res = {
            code: 200,
            data: runRes
        };
    }
    catch (e) {
        res = {
            code: 500,
            msg: e
        };
    }
    finally {
        await dbInfo.close();
    }
    return res;
}
exports.insertTaskInfo = insertTaskInfo;
async function selectOnGoingTaskInfo() {
    const dbInfo = await (0, dbConnect_1.connectDb)(userDbPath);
    const sql = `select * from tasks where isCompleted=0`;
    let res = null;
    try {
        const runRes = await dbInfo.all(sql);
        res = {
            code: 200,
            data: runRes
        };
    }
    catch (e) {
        res = {
            code: 500,
            msg: e
        };
    }
    finally {
        await dbInfo.close();
    }
    return res;
}
exports.selectOnGoingTaskInfo = selectOnGoingTaskInfo;
async function selectHistoryTaskInfo() {
    const dbInfo = await (0, dbConnect_1.connectDb)(userDbPath);
    const sql = `select * from tasks where isCompleted`;
    let res = null;
    try {
        const runRes = await dbInfo.all(sql);
        res = {
            code: 200,
            data: runRes
        };
    }
    catch (e) {
        res = {
            code: 500,
            msg: e
        };
    }
    finally {
        await dbInfo.close();
    }
    return res;
}
exports.selectHistoryTaskInfo = selectHistoryTaskInfo;
async function updateTaskInfo(taskId, duration, isGoing) {
    const dbInfo = await (0, dbConnect_1.connectDb)(userDbPath);
    const sql = `update tasks set duration=${duration},isGoing=${isGoing} where taskID=${taskId}`;
    let res = null;
    try {
        const runRes = await dbInfo.all(sql);
        res = {
            code: 200,
            data: runRes
        };
    }
    catch (e) {
        res = {
            code: 500,
            msg: e
        };
    }
    finally {
        await dbInfo.close();
    }
    return res;
}
exports.updateTaskInfo = updateTaskInfo;
