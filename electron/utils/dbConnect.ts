import {open} from "sqlite";
import {sqlite3} from "sqlite3"

const sqlite3=require("sqlite3").verbose()
export function connectDb(dbPath:any){
    return open({
        filename:dbPath,
        driver:sqlite3.Database
    })
}