<template>
  <div id="order">
    <div class="order-group">
      <group>
        <x-switch
          class="order-group-item"
          :title="$t('Auto Order')"
          v-model="autoOrder"
          @on-change="autoOrderChange"
        ></x-switch>
      </group>
      <group :title="$t('Custom order')" v-if="!autoOrder">
        <calendar
          class="order-group-item"
          disable-weekend
          disable-past
          disable-now
          :display-format="displayFormat"
          placeholder="placeholder"
          @on-change="onDateChange"
          v-model="breakfastDate"
          :title="$t('Breakfast')"
          :placeholder="$t('Please select')"
        ></calendar>
        <calendar
          class="order-group-item"
          disable-weekend
          :display-format="displayFormat"
          placeholder="placeholder"
          @on-change="onDateChange"
          v-model="lunchDate"
          :title="$t('Lunch')"
          :placeholder="$t('Please select')"
        ></calendar>
        <calendar
          class="order-group-item"
          disable-weekend
          :display-format="displayFormat"
          placeholder="placeholder"
          @on-change="onDateChange"
          v-model="dinnerDate"
          :title="$t('Dinner')"
          :placeholder="$t('Please select')"
        ></calendar>
      </group>
    </div>
    <div class="order-btn" v-if="isChange">
      <x-button type="primary" @click.native="order">提交</x-button>
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
Breakfast:
  zh-CN: 早餐
Lunch:
  zh-CN: 午餐
Dinner:
  zh-CN: 晚餐
</i18n>

<script>
export default {
  name: "Order",
  data() {
    return {
      isChange: false,
      breakfastDate: [],
      lunchDate: [],
      dinnerDate: [],
      autoOrder: true,
      displayFormat(value, type) {
        if (type === "string") {
          return value;
        } else {
          return value.length ? "已选 " + value.length + " 天" : "";
        }
      }
    };
  },
  methods: {
    autoOrderChange() {
      this.isChange = true;
    },
    onDateChange(val) {},
    order() {
      var orderDate = new Object();
      orderDate.breakfastDate = this.breakfastDate;
      orderDate.lunchDate = this.lunchDate;
      orderDate.dinnerDate = this.dinnerDate;
      alert(orderDate.breakfastDate);
    }
  }
};
</script>

<style>
#order {
  width: 100%;
  height: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.order-group {
  width: 95%;
}
.order-group-item {
  background-color: #fffdf6;
}
.order-btn {
  width: 60%;
  margin-bottom: 30px;
}
</style>


