<script lang="ts" setup>
import {ref} from 'vue'

</script>
<template>
  <div id="taskbar-wrapper">
    <div id="taskbar-container">
      <div id="taskbar-layout">
        <div class="taskbar-button">
          <el-button circle @click="check"/>
        </div>
        <div class="taskbar-title">
          <div class="taskbar-title-main">{{ taskName }}</div>
          <div class="taskbar-title-subtitle">Start at {{ startTime }}</div>
        </div>
        <div class="taskbar-timer">
          {{ timeConvert(localDuration) }}
        </div>
        <div class="taskbar-toggle">
          <el-switch
              v-model=taskGoing
              @change="going"
              class="ml-2"
              size="large"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #707070;"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {updateTaskInfo} from "../../electron/utils/dbOperator";
function timeConvert(second: number) {
  let hour = Math.floor(second / 3600)
  let min = Math.floor(second % 3600 / 60)
  let sec = second % 60
  return hour.toString() + ':' + min.toString() + ':' + sec.toString()
}

export default {
  name: "TaskBar",
  props: {
    taskId: Number,
    taskName: String,
    startTime: Date,
    startDate: String,
    duration: Number,
    isFinishedTask:false,
    isGoingTask:false,
  },
  data(this: any) {
    return {
      localDuration: this.duration,
      taskGoing:this.isGoing,
    }
  },
  methods: {
    check(this:any){
      console.log(this.isFinished)
    },
    going(this: any) {
      if(this.taskGoing){
        window.ipc.invoke("updateTaskInfo",this.taskId,this.localDuration,true)
      }
      let t = setInterval(() => {
        if(this.taskGoing) {

          console.log(++this.localDuration)
        }
        else{
          window.ipc.invoke("updateTaskInfo",this.taskId,this.localDuration,false)
          clearInterval(t)
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
:root {
  font-family: "Noto Sans Adlam";
  box-sizing: border-box;
}

#taskbar-container {
  display: flex;
  justify-content: space-around;
}

#taskbar-layout {
  display: flex;
  align-items: center;
  background: white;
  color: black;
  width: 100%;
  min-width: 400px;
  height: 64px;
  border-radius: 10px;
  margin: 5px 20px 5px 20px;
}

.taskbar-button {
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 0;
}

.taskbar-button .el-button {
  width: 32px;
}

.taskbar-title {
  flex-grow: 1;
  order: 1;
  height: 100%;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
}

.taskbar-title-main {
  flex-grow: 2;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.taskbar-title-subtitle {
  flex-grow: 1;
  font-size: 12px;
  display: flex;
  align-items: center;
}

.taskbar-timer {
  width: 100px;
  margin: 0 10px;
  order: 2;
}

.taskbar-toggle {
  width: 64px;
  order: 3;
}
</style>