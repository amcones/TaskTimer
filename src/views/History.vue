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
          <TaskBar></TaskBar>
          <TaskBar></TaskBar>
          <TaskBar></TaskBar>
          <TaskBar></TaskBar>
          <TaskBar></TaskBar>
          <TaskBar></TaskBar>
          <TaskBar></TaskBar>
          <TaskBar></TaskBar>
          <TaskBar></TaskBar>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "History"
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
  margin-bottom: 5px;
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
  margin: 15px 0;
}
</style>