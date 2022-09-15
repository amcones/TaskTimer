const path = require("path");
const {connectDb}=require("./dbConnect")
const userDbPath=path.join("./db","tasks.sqlite")

async function insertTaskInfo(data={}){
    const dbInfo=await connectDb(userDbPath)
    let taskName="aaa"
    const sql=`insert into tasks (taskName) values (${taskName})`
    let res=null
    try{
        const runRes=await dbInfo.run(sql)
        res={
            code:200,
            data:runRes
        }
    }catch (e){
        res={
            code: 500,
            msg:e
        }
    }finally {
        await dbInfo.close()
    }
    return res
}

async function selectTaskInfo(){
    const dbInfo=await connectDb(userDbPath)
    const sql=`select * from tasks`
    let res=null
    try{
        const runRes=await dbInfo.all(sql)
        console.log(runRes)
        res={
            code:200,
            data:runRes
        }
    }catch (e){
        res={
            code: 500,
            msg:e
        }
    }finally {
        await dbInfo.close()
    }
    return res
}

module.exports={insertTaskInfo,selectTaskInfo}
