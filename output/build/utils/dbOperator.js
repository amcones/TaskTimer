"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTaskInfo = exports.selectHistoryTaskInfo = exports.selectOnGoingTaskInfo = exports.insertTaskInfo = void 0;
const dbConnect_1 = require("./dbConnect");
const userDbPath = "/Users/jamesamcones/TaskTimer/db/tasks.sqlite";
async function insertTaskInfo(taskName) {
    const dbInfo = await (0, dbConnect_1.connectDb)(userDbPath);
    await dbInfo.run(`
create table if not exists tasks 
(
    taskID      INTEGER        not null
        constraint tasks_pk
            primary key autoincrement,
    taskName    varchar(65535) not null,
    startTime   datetime default (datetime('now', 'localtime')) not null,
    duration    time     default 0 not null,
    isCompleted boolean  default false not null,
    isGoing     boolean  default false
);

create unique index tasks_taskID_uindex
    on tasks (taskID);

`);
    const sql = `insert into tasks (taskName) values ('${taskName}')`;
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
    await dbInfo.run(`
create table if not exists tasks 
(
    taskID      INTEGER        not null
        constraint tasks_pk
            primary key autoincrement,
    taskName    varchar(65535) not null,
    startTime   datetime default (datetime('now', 'localtime')) not null,
    duration    time     default 0 not null,
    isCompleted boolean  default false not null,
    isGoing     boolean  default false
);

create unique index tasks_taskID_uindex
    on tasks (taskID);

`);
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
    await dbInfo.run(`
create table if not exists tasks 
(
    taskID      INTEGER        not null
        constraint tasks_pk
            primary key autoincrement,
    taskName    varchar(65535) not null,
    startTime   datetime default (datetime('now', 'localtime')) not null,
    duration    time     default 0 not null,
    isCompleted boolean  default false not null,
    isGoing     boolean  default false
);

create unique index tasks_taskID_uindex
    on tasks (taskID);

`);
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
async function updateTaskInfo(taskId, duration, isGoing, isCompleted) {
    const dbInfo = await (0, dbConnect_1.connectDb)(userDbPath);
    await dbInfo.run(`
create table if not exists tasks 
(
    taskID      INTEGER        not null
        constraint tasks_pk
            primary key autoincrement,
    taskName    varchar(65535) not null,
    startTime   datetime default (datetime('now', 'localtime')) not null,
    duration    time     default 0 not null,
    isCompleted boolean  default false not null,
    isGoing     boolean  default false
);

create unique index tasks_taskID_uindex
    on tasks (taskID);

`);
    const sql = `update tasks set duration=${duration},isGoing=${isGoing},isCompleted=${isCompleted} where taskID=${taskId}`;
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
async function deleteTask(taskID) {
    const dbInfo = await (0, dbConnect_1.connectDb)(userDbPath);
    await dbInfo.run(`
create table if not exists tasks 
(
    taskID      INTEGER        not null
        constraint tasks_pk
            primary key autoincrement,
    taskName    varchar(65535) not null,
    startTime   datetime default (datetime('now', 'localtime')) not null,
    duration    time     default 0 not null,
    isCompleted boolean  default false not null,
    isGoing     boolean  default false
);

create unique index tasks_taskID_uindex
    on tasks (taskID);

`);
    const sql = `DELETE FROM tasks WHERE taskID = ${taskID};`;
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
exports.deleteTask = deleteTask;
