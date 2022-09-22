<script lang="ts" setup>
import TaskBar from "../components/TaskBar.vue";
</script>
<template>
  <div id="content">
    <div id="main">
      <div id="header">
        <div id="title"><p>Completed Tasks</p></div>
        <div id="title-info"><p>Total {{ tasks.length }} tasks.</p></div>
      </div>
      <div id="main-container">
        <el-scrollbar>
          <TaskBar v-for="task in tasks"
                   :task-id="task[`taskID`]"
                   :task-name="task[`taskName`]"
                   :start-time="task[`startTime`]"
                   :duration="task[`duration`]"
                   :is-completed-task="task[`isCompleted`]"

          ></TaskBar>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "History",
  mounted(this:any) {
    this.getTasks()
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    getTasks(this: any) {
      let res = window.ipc.invoke("getHistoryTasks")
      res.then((val) => {
        this.tasks = val.data?val.data:0
      })
    }
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
</style>