"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const sqlite_1 = require("sqlite");
const sqlite3 = require("sqlite3").verbose();
function connectDb(dbPath) {
    return (0, sqlite_1.open)({
        filename: dbPath,
        driver: sqlite3.Database
    });
}
exports.connectDb = connectDb;
