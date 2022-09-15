const{open}=require("sqlite")
const sqlite3=require("sqlite3").verbose()
const connectDb=(dbPath)=>{
    return open({
        filename:dbPath,
        driver:sqlite3.Database
    })
}
module.exports={connectDb}