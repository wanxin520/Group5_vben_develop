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
            <div>
              <div class="font-bold text-[16px] mb-5">选择项目</div>
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
            </div>
          </Col>

          <Col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :md="{ span: 9 }"
            :lg="{ span: 9 }"
            :xl="{ span: 9 }"
            :xxl="{ span: 9 }"
          >
            <div>
              <div class="mb-2">周期</div>
              <DatePicker v-model:value="value1" />
              <span>至</span>
              <DatePicker v-model:value="value2" />
            </div>
          </Col>
          <Col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :md="{ span: 6 }"
            :lg="{ span: 6 }"
            :xl="{ span: 6 }"
            :xxl="{ span: 6 }"
          >
            <div class="p-4"></div>
            <div class="flex">
              <div>
                <div class="w-[300px] h-[60px]" @click="inputShowModal">
                  <Input v-model:value="value" placeholder="搜索信息" style="border-radius: 20px" />
                </div>
                <div>
                  <Modal v-model:visible="inputVisible" :closable="false" width="766px">
                    <inputModal />
                  </Modal>
                </div>
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
            <template #look="">
              <div @click="commissionShowModal" class="text-blue-500"> 查看</div>
            </template>
            <template #action="">
              <div @click="payShowModal" class="text-blue-500"> 发放提成</div>
            </template>
          </Table>
          <div>
            <Modal v-model:visible="commissionVisible" width="766px">
              <template #title>
                <h2 class="text-lg text-[#1989fa]">房间行业提成详情</h2>
              </template>
              <ContractDetailModal />
            </Modal>
            <Modal v-model:visible="payVisible" width="450px">
              <template #title>
                <h2 class="text-lg text-[#1989fa]">发放提成</h2>
              </template>
              <paycommission />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  </pageWrapper>
</template>
<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { getWorkbenchData } from '/@/api/PerformanceManagement';
  import config from './config';
  import { Icon } from '@iconify/vue';
  import { ref } from 'vue';
  import { Col, Row, Select, SelectOption, DatePicker, Input, Table, Modal } from 'ant-design-vue';
  import { Moment } from 'moment';
  import inputModal from './inputModal.vue';
  import ContractDetailModal from './ContractDetailModal.vue'; // 替换为实际路径;
  import paycommission from './paycommission.vue';
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
  const value2 = ref<Moment>();

  // 搜索框
  const value = ref<string>('');
  //发放提成的弹框
  const payVisible = ref(false);
  const payShowModal = () => {
    payVisible.value = true;
  };
  //查看的弹框
  const commissionVisible = ref(false);
  const commissionShowModal = () => {
    commissionVisible.value = true;
  };
  // 搜索框的弹框
  const inputVisible = ref(false);

  const inputShowModal = () => {
    inputVisible.value = true;
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
