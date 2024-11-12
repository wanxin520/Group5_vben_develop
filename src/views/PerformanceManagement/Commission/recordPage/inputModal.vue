<template>
  <div class="p-5">
    <div
      ><Input v-model:value="value" placeholder="分佣人员信息" style="border-radius: 20px" />
    </div>
    <div class="p-5">
      <div class="mb-5">签约时间</div>
      <!-- <Space direction="vertical" style="display: flex; justify-items: space-between"> -->
      <DatePicker v-model:value="value1" />
      <span class="mx-5">至</span>
      <DatePicker v-model:value="value2" />
    </div>
    <div class="p-5">
      <div>首月租金</div>
      <Row type="flex" justify="space-around" class="p-5">
        <Col
          style="border: 2px solid #d9d9d9; color: #a3a3a3; border-radius: 5px; text-align: center"
          :span="4"
          ><RadioButton style="width: 100%; border: 1px blue solid; color: blue" value="不限"
            >不限</RadioButton
          ></Col
        >
        <Col
          style="border: 2px solid #d9d9d9; color: #a3a3a3; border-radius: 5px; text-align: center"
          :span="4"
          >≤1000元</Col
        >
        <Col
          style="border: 2px solid #d9d9d9; color: #a3a3a3; border-radius: 5px; text-align: center"
          :span="4"
          >1000-1500元</Col
        >
        <Col
          style="border: 2px solid #d9d9d9; color: #a3a3a3; border-radius: 5px; text-align: center"
          :span="4"
          >1500-2000元</Col
        >
      </Row>
      <Row type="flex" justify="space-around" class="p-5">
        <Col
          style="border: 2px solid #d9d9d9; color: #a3a3a3; border-radius: 5px; text-align: center"
          :span="4"
          >2000-3000元</Col
        >
        <Col
          style="border: 2px solid #d9d9d9; color: #a3a3a3; border-radius: 5px; text-align: center"
          :span="4"
          >3000-5000元</Col
        >
        <Col
          style="border: 2px solid #d9d9d9; color: #a3a3a3; border-radius: 5px; text-align: center"
          :span="4"
          >5000-8000元</Col
        >
        <Col
          style="border: 2px solid #d9d9d9; color: #a3a3a3; border-radius: 5px; text-align: center"
          :span="4"
          >>8000元</Col
        >
      </Row>
      <div>签约面积</div>
      <div>
        <Row type="flex" justify="space-around" class="p-5">
          <Col
            style="
              border: 2px solid #d9d9d9;
              color: #a3a3a3;
              border-radius: 5px;
              text-align: center;
              text-align: center;
            "
            :span="4"
          >
            <RadioButton style="width: 100%; border: 1px blue solid; color: blue" value="不限"
              >不限</RadioButton
            >
          </Col>
          <Col
            style="
              border: 2px solid #d9d9d9;
              color: #a3a3a3;
              border-radius: 5px;
              text-align: center;
            "
            :span="4"
            >≤10m²</Col
          >
          <Col
            style="
              border: 2px solid #d9d9d9;
              color: #a3a3a3;
              border-radius: 5px;
              text-align: center;
            "
            :span="4"
            >10-30m²</Col
          >
          <Col
            style="
              border: 2px solid #d9d9d9;
              color: #a3a3a3;
              border-radius: 5px;
              text-align: center;
            "
            :span="4"
            >30-50m²</Col
          >
        </Row>
        <Row type="flex" justify="space-around" class="p-5">
          <Col
            style="
              border: 2px solid #d9d9d9;
              color: #a3a3a3;
              border-radius: 5px;
              text-align: center;
            "
            :span="4"
            >50-70m²</Col
          >
          <Col
            style="
              border: 2px solid #d9d9d9;
              color: #a3a3a3;
              border-radius: 5px;
              text-align: center;
            "
            :span="4"
            >70-90m²</Col
          >
          <Col
            style="
              border: 2px solid #d9d9d9;
              color: #a3a3a3;
              border-radius: 5px;
              text-align: center;
            "
            :span="4"
            >90-110m²</Col
          >
          <Col
            style="
              border: 2px solid #d9d9d9;
              color: #a3a3a3;
              border-radius: 5px;
              text-align: center;
            "
            :span="4"
            >>110m²</Col
          >
        </Row>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { DatePicker, Input, Row, Col, RadioButton } from 'ant-design-vue';
  import { Moment } from 'moment';
  // 日历
  const value1 = ref<Moment>();
  const value2 = ref<Moment>();
  // 搜索框
  const value = ref<string>('');
</script>
<style scoped>
  Col:hover {
    color: blue;
  }
</style>
