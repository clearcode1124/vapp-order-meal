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
  mounted: function() {
    this.autoLogin();
  },
  methods: {
    autoLogin() {
      let that = this;
      this.$http.get("/api/v1/signs/get-sign").then(
        res => {
          var data = res.data;
          var timeStamp = data.split(",")[0];
          var signature = data.split(",")[1];
          // alert(timeStamp + "," + signature);
          this.$dd.config({
            agentId: "232633030", // 必填，微应用ID
            corpId: "ding06e35a04569c475d35c2f4657eb6378f", //必填，企业ID
            timeStamp: timeStamp, // 必填，生成签名的时间戳
            nonceStr: "123456", // 必填，生成签名的随机串
            signature: signature, // 必填，签名
            type: 0, //选填。0表示微应用的jsapi,1表示服务窗的jsapi；不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
            jsApiList: [
              "runtime.info",
              "biz.contact.choose",
              "device.notification.confirm",
              "device.notification.alert",
              "device.notification.prompt",
              "biz.ding.post",
              "biz.util.openLink"
            ] // 必填，需要使用的jsapi列表，注意：不要带dd。
          });
          this.$dd.userid = 0;
          this.$dd.ready(function() {
            that.$dd.runtime.permission.requestAuthCode({
              corpId: "ding06e35a04569c475d35c2f4657eb6378f", // 企业id
              onSuccess: function(info) {
                // let code = info.code; // 通过该免登授权码可以获取用户身份
                // alert(info.code);
                that.$http
                  .post("/api/v1/auth/login?requestAuthCode=" + info.code)
                  .then(res => {
                    that.$cookies.set("username", res.data.name, 60 * 60 * 12);
                    that.$cookies.set("avatar", res.data.avatar, 60 * 60 * 12);
                  });
              },
              onFail: function(err) {
                alert(JSON.stringify(error));
              }
            });
          });
          this.$dd.error(function(error) {
            alert("dd error: " + JSON.stringify(error));
          });
        },
        res => {
          console.info("调用失败");
        }
      );
    },
    getCookies() {
      this.name = this.$cookies.get("username");
    },
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
