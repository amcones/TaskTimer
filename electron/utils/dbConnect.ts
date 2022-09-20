import {open} from "sqlite";

const sqlite3=require("sqlite3").verbose()
export function connectDb(dbPath:any){
    return open({
        filename:dbPath,
        driver:sqlite3.Database
    })
}