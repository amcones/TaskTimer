<script lang="ts" setup>

</script>
<template>
  <div id="taskbar-wrapper">
    <div id="taskbar-container">
      <div id="taskbar-layout">
        <div class="taskbar-button">
          <el-button circle
                     @click="completing"
                     v-if="!isCompletedTask"
          />
          <el-button circle
                     @click="deleting"
                     color="#ef535a"
                     plain
                     v-if="isCompletedTask"
          />
        </div>
        <div class="taskbar-title">
          <div class="taskbar-title-main">{{ taskName }}</div>
          <div class="taskbar-title-subtitle">Start at {{ startTime }}</div>
        </div>
        <div class="taskbar-timer">
          {{ timeConvert(localDuration) }}
        </div>
        <div class="taskbar-toggle"
             v-if="!isCompletedTask">
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

export default {
  name: "TaskBar",
  props: {
    taskId: Number,
    taskName: String,
    startTime: String,
    startDate: String,
    duration: Number,
    isCompletedTask: Number,
    isGoingTask: Number,
  },
  data(this: any) {
    return {
      localDuration: this.duration,
      taskGoing: this.isGoingTask,
      lastInterval: 0
    }
  },
  mounted(this: any) {
    this.check()
  },
  methods: {
    timeConvert(second: number) {
      let hour = Math.floor(second / 3600)
      let min = Math.floor(second % 3600 / 60)
      let sec = second % 60
      return (hour < 10 ? '0' + hour.toString() : hour.toString()) + ':' + (min < 10 ? '0' + min.toString() : min.toString()) + ':' + (sec < 10 ? '0' + sec.toString() : sec.toString())
    },
    check(this: any) {
      if (this.isGoingTask) {
        this.taskGoing = true
      }
    },
    completing(this:any){
      window.ipc.invoke("updateTaskInfo", this.taskId, this.localDuration, false,true)
      location.reload()
    },
    going(this: any) {
      if (!this.taskGoing) {
        clearInterval(this.lastInterval)
        window.ipc.invoke("updateTaskInfo", this.taskId, this.localDuration, false,false)
      }
      else {
        window.ipc.invoke("updateTaskInfo", this.taskId, this.localDuration, true,false)
        this.lastInterval = setInterval(() => {
          ++this.localDuration
          window.ipc.invoke("updateTaskInfo", this.taskId, this.localDuration, true,false)
        }, 1000)
      }
    },
    deleting(this:any){
      window.ipc.invoke("deleteTask", this.taskId)
      location.reload()
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