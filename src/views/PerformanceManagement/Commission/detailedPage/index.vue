<template>
  <div class="title">租赁提成明细页面</div>
  <pageWrapper>
    <div>
      <div class="ml-3">
        <div class="flex"> </div>
        <Row :gutter="[10, 10]">
          <Col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :md="{ span: 9 }"
            :lg="{ span: 9 }"
            :xl="{ span: 9 }"
            :xxl="{ span: 9 }"
          >
            <div class="font-bold text-[16px]">选择项目</div>
            <Select
              class="w-[200px]"
              defaultActiveFirstOption
              v-model:value="selectRes"
              @change="selectResChange"
            >
              <SelectOption value="0">不限</SelectOption>
              <SelectOption value="1">软件新城</SelectOption>
              <SelectOption value="2">邓甲新城</SelectOption>
              <SelectOption value="3">创新公寓</SelectOption>
              <SelectOption value="4">测试公寓楼栋</SelectOption>
            </Select>
          </Col>

          <Col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :md="{ span: 9 }"
            :lg="{ span: 9 }"
            :xl="{ span: 9 }"
            :xxl="{ span: 9 }"
          >
            <div>周期</div>
            <!-- <Space direction="vertical" style="display: flex; justify-items: space-between"> -->
            <DatePicker v-model:value="value1" />
            <span>至</span>
            <DatePicker v-model:value="value1" />
            <!-- </Space> -->
          </Col>
          <Col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :md="{ span: 6 }"
            :lg="{ span: 6 }"
            :xl="{ span: 6 }"
            :xxl="{ span: 6 }"
            ><div>1</div>
            <div class="flex">
              <div class="w-[300px] h-[60px]">
                <Input v-model:value="value" placeholder="搜索信息" style="border-radius: 20px" />
              </div>
              <div class="ml-4">
                <Icon
                  icon="hugeicons:download-01"
                  style="color: #0960bd; width: 30px; height: 30px"
                />
              </div>
            </div>
          </Col>
        </Row>
        <div style="overflow: auto">
          <Table :dataSource="tableDate" :columns="config.columns" style="width: 160%">
            <template #action="">
              <div @click="showModal"> 发放提成</div>
            </template>
          </Table>
          <div>
            <Modal v-model:visible="visible" width="766px">
              <template #title>
                <h2 class="text-lg text-[#1989fa]">房间行业提成详情</h2>
              </template>
              <ContractDetailModal />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  </pageWrapper>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { getWorkbenchData } from '/@/api/PerformanceManagement';
  import config from './config';
  import { Icon } from '@iconify/vue';
  import { Col, Row, Select, SelectOption, DatePicker, Input, Table, Modal } from 'ant-design-vue';
  import { Moment } from 'moment';
  import ContractDetailModal from './ContractDetailModal.vue'; // 替换为实际路径;

  // import model from './modal.vue';
  // 表格
  const tableDate = ref();
  getWorkbenchData()
    .then((res) => {
      tableDate.value = res.result.result;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  // 下拉选择框
  const selectRes = ref('不限');
  const selectResChange = (value: string) => {
    console.log(value);
    console.log(selectRes);
  };
  // 日历
  const value1 = ref<Moment>();
  // 搜索框
  const value = ref<string>('');
  const visible = ref(false);

  const showModal = () => {
    visible.value = true;
  };
</script>
<style scoped>
  .title {
    margin: 5px 20px;
    width: fit-content;
    border-left: 3px solid #1890ff;
    border-radius: 3px;
    padding-left: 5px;
  }
</style>
