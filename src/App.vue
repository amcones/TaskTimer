<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>

<template>
  <div id="wrapper" ondragstart="return false" onselectstart="return false">
    <div class="top-bar"></div>
    <div id="layout">
      <div id="side-bar">
        <div id="menu">
          <div class="menu-btn">
            <router-link to="/">
              <button>
              <span class="menu-btn-container">
                <el-icon :size="28">
                  <AlarmClock/>
                </el-icon>
              </span>
              </button>
            </router-link>
          </div>
          <div class="menu-btn">
            <router-link to="/history">
              <button>
              <span class="menu-btn-container">
                <el-icon :size="28">
                  <Box/>
                </el-icon>
              </span>
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>

  </div>

</template>

<style scoped>
:root {
  font-family: "Noto Sans Adlam";
}

.top-bar {
  -webkit-app-region: drag;
  min-height: 30px;
  width: 100%;
  position: absolute;
  float: top;
}

#wrapper {
  height: 100vh;
  width: 100vw;
  background-image: url(assets/background.png);
  background-size: cover;
}

#layout {
  display: flex;
  height: 100vh;
}

#side-bar {
  width: 75px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

#menu {
  margin: 60px 0;
  display: flex;
  flex-direction: column;
}

.menu-btn {
  width: 55px;
  height: 55px;
  margin: 5px 10px;
}

.menu-btn a {
  display: block;
  width: 100%;
  height: 100%;
}

.menu-btn button {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #ffffff;
  cursor: pointer;
  transition: border-color 0.25s;
}

.menu-btn button:hover {
  border-color: #646cff;
}

.menu-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
