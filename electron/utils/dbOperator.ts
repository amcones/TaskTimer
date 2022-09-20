import * as path from "path";
import {connectDb} from "./dbConnect"

const userDbPath=path.join("./db","tasks.sqlite")

export async function insertTaskInfo(taskName:string){
    const dbInfo=await connectDb(userDbPath)
    const sql=`insert into tasks (taskName) values ('${taskName}')`
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
    console.log(res.msg)
    return res
}

export async function selectOnGoingTaskInfo(){
    const dbInfo=await connectDb(userDbPath)
    const sql=`select * from tasks where isCompleted=0`
    let res=null
    try{
        const runRes=await dbInfo.all(sql)
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

export async function selectHistoryTaskInfo(){
    const dbInfo=await connectDb(userDbPath)
    const sql=`select * from tasks where isCompleted`
    let res=null
    try{
        const runRes=await dbInfo.all(sql)
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

export async function updateTaskInfo(taskId:any,duration:any,isGoing:any,isCompleted:any){
    const dbInfo=await connectDb(userDbPath)

    const sql=`update tasks set duration=${duration},isGoing=${isGoing},isCompleted=${isCompleted} where taskID=${taskId}`
    let res=null
    try{
        const runRes=await dbInfo.all(sql)
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