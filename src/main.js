// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as dd from 'dingtalk-jsapi'
import router from './router'
import axios from 'axios'
import cookies from 'vue-cookies'
import vuexI18n from 'vuex-i18n'
import {
  XButton,
  Tabbar,
  TabbarItem,
  Icon,
  Calendar,
  Group,
  XSwitch,
  Cell
} from 'vux'

Vue.use(vuexI18n)

Vue.component('x-button', XButton)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('icon', Icon)
Vue.component('calendar', Calendar)
Vue.component('group', Group)
Vue.component('x-switch', XSwitch)
Vue.component('cell', Cell)

Vue.prototype.$dd = dd
Vue.prototype.$cookies = cookies
axios.get("/api/v1/auth/get-sign").then(
  res => {
    var data = res.data;
    var timeStamp = data.split(",")[0];
    var signature = data.split(",")[1];
    // alert(timeStamp + "," + signature);
    dd.config({
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
    dd.userid = 0;
    dd.ready(function () {
      dd.runtime.permission.requestAuthCode({
        corpId: "ding06e35a04569c475d35c2f4657eb6378f", // 企业id
        onSuccess: function (info) {
          axios.post("/api/v1/auth/login?requestAuthCode=" + info.code)
            .then(res => {
              var token = res.data.detail;
              Vue.prototype.$http = axios.create({
                baseURL: "/api/v1",
                timeout: 10000,
                headers: {
                  Authorization: "Bearer " + token
                }
              });
              window.localStorage.setItem("user", JSON.stringify(res.data.user));
            });
        },
        onFail: function (err) {
          alert(JSON.stringify(error));
        }
      });
    });
    dd.error(function (error) {
      alert("dd error: " + JSON.stringify(error));
    });
  },
  res => {
    console.info("调用失败");
  }
);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
