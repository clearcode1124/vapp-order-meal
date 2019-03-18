<template>
  <div id="app">
    <div class="header"></div>
    <div class="content">
      <router-view class="main-view"></router-view>
    </div>
    <div class="footer">
      <div class="bottom-tabbar" @click="bottomTab(1)">
        <img class="bottom-tabbar-img" slot="icon" :src="riceImg">
      </div>
      <div class="bottom-tabbar" @click="bottomTab(2)">
        <img class="bottom-tabbar-img" slot="icon" :src="userImg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      riceImg: require("./assets/rice-100.png"),
      userImg: require("./assets/user-simple-128.png")
    };
  },
  methods: {
    bottomTab(id) {
      var name = "Order";
      if (id == 2) {
        this.riceImg = require("./assets/rice-simple-128.png");
        this.userImg = require("./assets/user-96.png");
        name = "User";
      } else {
        this.riceImg = require("./assets/rice-100.png");
        this.userImg = require("./assets/user-simple-128.png");
      }
      this.$router.push({
        name: name
      });
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  overflow: hidden;
}
#app {
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: #fffdf6;
}
.header {
  width: 100%;
}
.content {
  width: 100%;
  height: 90%;
}
.main-view {
  width: 100%;
  height: 100%;
}
.footer {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #494949;
}
.bottom-tabbar {
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #494949;
}
.bottom-tabbar-img {
  width: 20%;
  height: 80%;
}
</style>
