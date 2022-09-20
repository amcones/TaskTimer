<script lang="ts" setup>
import TaskBar from "../components/TaskBar.vue";
</script>
<template>
  <div id="content">
    <div id="main">
      <div id="header">
        <div id="title"><p>On going</p></div>
        <div id="title-info"><p>{{ WeekDay }}, {{ Month }} {{ MonthDate }} {{ Hour }}:{{ Minute }}:{{ Second }}</p>
        </div>
      </div>
      <div id="main-container">
        <el-scrollbar>
          <TaskBar v-for="task in tasks"
                   :task-id="task[`taskID`]"
                   :task-name="task[`taskName`]"
                   :start-time="task[`startTime`]"
                   :duration="task[`duration`]"
                   :is-completed-task="task[`isCompleted`]"
                   :is-going-task="task[`isGoing`]"
          ></TaskBar>
        </el-scrollbar>
      </div>
      <div id="mainInput">
        <div id="taskbar-wrapper">
          <div id="taskbar-container">
            <div id="taskbar-layout">
              <div class="taskbar-button">
                <el-button circle @click="submitTask"/>
              </div>
              <div class="taskbar-title">
                <div class="taskbar-title-main">
                  <input
                      id="new-Task"
                      placeholder="New Task..."
                      @keydown.enter="submitTask"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";

const tasks = ref()

function getTasks() {
  let res = window.ipc.invoke("getOnGoingTasks")
  res.then((val) => {
    tasks.value = val.data
  })
}

export default {
  name: "OnGoing",
  mounted(this: any) {
    getTasks()
    this.gettime()
    setInterval(this.gettime, 500)
  },
  data() {
    return {
      WeekDay: ref(""),
      Month: ref(""),
      MonthDate: ref(),
      Hour: ref(""),
      Minute: ref(""),
      Second: ref(""),
    }
  },
  methods: {
    submitTask(this: any) {
      let input:HTMLInputElement=document.getElementById("new-Task") as HTMLInputElement
      let taskName=input.value
      if (taskName != null) {
        console.log(taskName)
        window.ipc.invoke("insertTaskInfo", taskName)
      }
      input.value=""
      location.reload()
    },
    gettime(this:any) {
      const d = new Date()
      const a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      const m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      this.WeekDay = a[d.getDay()]
      this.Month = m[d.getMonth()]
      this.MonthDate = d.getDate()
      this.Hour = d.getHours() < 10 ? '0' + d.getHours().toString() : d.getHours().toString()
      this.Minute = d.getMinutes() < 10 ? '0' + d.getMinutes().toString() : d.getMinutes().toString()
      this.Second = d.getSeconds() < 10 ? '0' + d.getSeconds().toString() : d.getSeconds().toString()
    }
  },
  unmounted() {
    location.reload()
  }
}
</script>

<style scoped>
p {
  margin: 0
}

#content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px 0;
  box-sizing: border-box;
}

#main {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

}

#header {
  margin: 30px 30px;
  height: 90px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

#title {
  font-size: 40px;
}

#title-info {
  font-size: 18px;
  margin-top: 5px;
}

#main-container {
  flex-grow: 1;
  overflow: hidden;
}

#mainInput {
  height: 80px;
  margin: 15px 0 0 0;
}

#taskbar-container {
  display: flex;
  justify-content: space-around;
}

#taskbar-layout {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  color: white;
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
  background: transparent;
}

.taskbar-title {
  flex-grow: 1;
  order: 1;
  height: 100%;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  padding: 5px 20px 5px 0;
}

.taskbar-title-main {
  flex-grow: 2;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.taskbar-title-main input {
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 36px;
  color: white;
  font-size: 16px;
}
</style>