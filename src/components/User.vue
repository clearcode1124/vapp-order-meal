<template>
  <div id="user">
    <div class="user-info">
      <img src="http://images.clearcode.top/logo.png" style="width: 20%; height: 6%; padding: 15px;">
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
    return { username: "admin" };
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
  margin-top: 50px;
  /* background-color: #ffecda; */
}
.user-info-cell {
  background-color: #fffdf6;
}
</style>