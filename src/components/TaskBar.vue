<script lang="ts" setup>
import { ref } from 'vue'

const value2 = ref(false)
</script>
<template>
  <div id="taskbar-wrapper">
    <div id="taskbar-container">
      <div id="taskbar-layout">
          <div class="taskbar-button">
            <el-button circle />
          </div>
        <div class="taskbar-title">
          <div class="taskbar-title-main">Go over PAM</div>
          <div class="taskbar-title-subtitle">Start at 16:56, Sep 13th</div>
        </div>
        <div class="taskbar-timer">
          121:03:24
        </div>
        <div class="taskbar-toggle">
          <el-switch
              v-model=value2
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
export default {
  name: "TaskBar"
}
</script>

<style scoped>
:root{
  font-family: "Noto Sans Adlam";
  box-sizing: border-box;
}
#taskbar-container{
  display: flex;
  justify-content: space-around;
}
#taskbar-layout{
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
.taskbar-button{
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 0;
}
.taskbar-button .el-button{
  width: 32px;
}

.taskbar-title{
  flex-grow: 1;
  order: 1;
  height: 100%;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
}
.taskbar-title-main{
  flex-grow: 2;
  font-size: 16px;
  display: flex;
  align-items: center;
}
.taskbar-title-subtitle{
  flex-grow: 1;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.taskbar-timer{
  width: 100px;
  margin: 0 10px;
  order: 2;
}
.taskbar-toggle{
  width: 64px;
  order: 3;
}
</style>