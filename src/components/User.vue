<template>
  <div id="user">
    <div class="user-info">
      <img :src="avatar" style="width: 20%; height: 6%; padding: 15px;">
      <h3 style="margin-left: 5px;">{{ username }}</h3>
    </div>
    <group>
      <cell class="user-info-cell" title="账单" value="value" is-link></cell>
      <cell class="user-info-cell" title="我的报餐" value="value" is-link></cell>
    </group>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      username: "匿名用户",
      avatar: "http://images.clearcode.top/avatar.png"
    };
  },
  mounted: function() {
    var user = this.$cookies.get("user");
    var username = user.name;
    var avatar = user.avatar;
    if (username != undefined) {
      this.username = username;
    }
    if (avatar != undefined) {
      this.avatar = avatar;
    }
  }
};
</script>

<style>
#user {
  width: 100%;
  height: 100;
}
.user-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  /* background-color: #ffecda; */
}
.user-info-cell {
  background-color: #fffdf6;
}
</style>