<template>
  <div id="order">
    <div>
      <group>
        <x-switch :title="$t('Auto Order')" v-model="autoOrder" style="background-color: #ffe0a3"></x-switch>
        <calendar
          placeholder="placeholder"
          @on-change="onDateChange"
          v-model="date"
          :title="$t('Custom order')"
          :popup-header-title="$t('Please select')"
          v-if="!autoOrder"
        ></calendar>
      </group>
    </div>
  </div>
</template>

<i18n>
Auto Order:
  zh-CN: 自动报餐
Please select:
  zh-CN: 选择日期
Custom order:
  zh-CN: 自定义报餐
</i18n>

<script>
export default {
  name: "Order",
  data() {
    return {
      date: ['2019-03-06','2019-03-07'],
      autoOrder: true
    };
  },
  methods: {
    onDateChange(val) {
      alert(val);
    }
  }
};
</script>

<style>
#order {
  width: 100%;
  height: 100;
  /* background-color: greenyellow; */
}
</style>


