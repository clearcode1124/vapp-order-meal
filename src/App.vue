<template>
  <div id="app">
    <!-- <x-button type="primary" @click.native="test">submit</x-button>
    <h1>{{ content }}</h1>-->
    <div class="header"></div>
    <div class="content">
      <router-view class="main-view"></router-view>
    </div>
    <div class="footer">
      <div class="bottom-tabbar" @click="bottomTab(1)">
        <img class="bottom-tabbar-img" slot="icon" src="./assets/rice-100.png">
      </div>
      <div class="bottom-tabbar" @click="bottomTab(2)">
        <img class="bottom-tabbar-img" slot="icon" src="./assets/user-96.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      content: "aaa"
    };
  },
  methods: {
    bottomTab(id) {
      var name = "Order";
      if (id == 2) {
        name = "User";
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
  background-color: #fcf3ca;
}
.header {
  width: 100%;
  height: 5%;
}
.content {
  width: 100%;
  height: 85%;
}
.main-view {
  width: 100%;
  height: 100%;
}
.footer {
  width: 100%;
  height: 10%;
  background-color: #6bd5e1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.bottom-tabbar {
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #6bd5e1;
}
.bottom-tabbar-img {
  width: 20%;
  height: 80%;
}
</style>
