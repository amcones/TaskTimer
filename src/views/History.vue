<script lang="ts" setup>
import TaskBar from "../components/TaskBar.vue";
import { ref } from 'vue'
const count = 0
</script>
<template>
  <div id="content">
    <div id="main">
      <div id="header">
        <div id="title"><p>Completed Tasks</p></div>
        <div id="title-info"><p>Total {{count}} tasks.</p></div>
      </div>
      <div id="main-container">
        <el-scrollbar>
          <TaskBar v-for="task in tasks"
                   :task-id="task.taskID"
                   :task-name="task.taskName.toString()"
                   :start-time="task.startTime"
                   :duration="task.duration"
                   :is-finished="task.isFinished"
          ></TaskBar>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: "History",
  mounted() {
    getTasks()
  }
}
const tasks = ref()

function getTasks() {
  let res = window.ipc.invoke("getHistoryTasks")
  res.then((val) => {
    tasks.value = val.data
    console.log(tasks.value)
  })
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
</style>