<template>
  <div class="title">租赁提成汇总</div>
  <pageWrapper>
    <div>
      <Row class="p-5">
        <Col
          :xs="{ span: 24 }"
          :sm="{ span: 24 }"
          :md="{ span: 12 }"
          :lg="{ span: 12 }"
          :xl="{ span: 12 }"
          :xxl="{ span: 12 }"
        >
          <div
            ><div>周期</div>
            <DatePicker v-model:value="value1" />
            <span>至</span>
            <DatePicker v-model:value="value2"
          /></div>
        </Col>
        <Col
          :xs="{ span: 24 }"
          :sm="{ span: 24 }"
          :md="{ span: 12 }"
          :lg="{ span: 12 }"
          :xl="{ span: 12 }"
          :xxl="{ span: 12 }"
        >
          <div class="flex justify-end">
            <div class="w-[400px]" @click="inputShowModal"
              ><Input v-model:value="value" placeholder="分佣人员信息" style="border-radius: 20px"
            /></div>
            <div>
              <Modal v-model:visible="inputVisible" :closable="false" width="766px">
                <inputModal />
              </Modal>
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
      <Row class="p-5">
        <Col
          :xs="{ span: 24 }"
          :sm="{ span: 24 }"
          :md="{ span: 24 }"
          :lg="{ span: 24 }"
          :xl="{ span: 24 }"
          :xxl="{ span: 24 }"
        >
          <div style="overflow: auto">
            <Table :data-source="data" style="width: 160%">
              <TableColumn key="id" title="序号" data-index="id" />
              <TableColumn key="commissionAgent" title="分佣人员" data-index="commissionAgent" />
              <TableColumn key="commissionRole" title="分佣职务" data-index="commissionRole" />
              <TableColumn key="property" title="佣金" data-index="property" />
              <TableColumnGroup>
                <template #title><span>行业内/商业</span></template>
                <TableColumn key="rent" data-index="rent">
                  <template #title><span>3年以上（首月租金）</span></template>
                </TableColumn>
                <TableColumn key="commission" data-index="commission">
                  <template #title><span>提成比例</span></template>
                </TableColumn>
                <TableColumn key="rent1" data-index="rent1">
                  <template #title><span>3年以内（首月租金）</span></template>
                </TableColumn>
                <TableColumn key="commission1" data-index="commission1">
                  <template #title><span>提成比例</span></template>
                </TableColumn>
              </TableColumnGroup>
              <TableColumnGroup>
                <template #title><span>行业外</span></template>
                <TableColumn key="area" data-index="area">
                  <template #title><span>签约面积</span></template>
                </TableColumn>
                <TableColumn key="commission" data-index="commission">
                  <template #title><span>提成比例</span></template>
                </TableColumn>
              </TableColumnGroup>
              <TableColumn
                key="targetcompletiontime"
                title="提成目标完成时间"
                data-index="targetcompletiontime"
              />
              <TableColumn key="totalcommission" title="租赁总提成" data-index="totalcommission" />
              <TableColumn
                key="testotalamountdeducted"
                title="扣除总额"
                data-index="testotalamountdeducted"
              />
              <TableColumn key="distribution" title="此次发放总额" data-index="distribution" />
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  </pageWrapper>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import {
    DatePicker,
    Input,
    Row,
    Col,
    Table,
    TableColumn,
    TableColumnGroup,
    Modal,
  } from 'ant-design-vue';
  import { Icon } from '@iconify/vue';
  import { Moment } from 'moment';
  import inputModal from './inputModal.vue';
  // 日历
  const value1 = ref<Moment>();
  const value2 = ref<Moment>();
  // 搜索框
  const value = ref<string>('');
  // 搜索框的弹框
  const inputVisible = ref(false);
  const inputShowModal = () => {
    inputVisible.value = true;
  };
  // 表格数据
  const data = [
    {
      key: '1',
      id: 1, //序号
      commissionAgent: '黄哈哈-13111112222', //分佣人员
      commissionRole: '招商专员', //分佣职务
      property: 'XXX项目1401', //房源
      rent: '15000元', //3年以上（首月租金）
      commission: '100%', //提成比例
      rent1: '', //3年以内（首月租金）
      commission1: '', //提成比例
      area: '', //签约面积
      commission3: '', //提成比例
      targetcompletiontime: '2023-03-01', //提成目标完成间时
      totalcommission: '15000元', //租赁总提成
      testotalamountdeducted: '2000元', //扣除总额
      distribution: '7500元', //此次发放总额
    },
    {
      key: '2',
      id: 2, //序号
      commissionAgent: '黄嘻嘻-13111112222', //分佣人员
      commissionRole: '招商主管', //分佣职务
      property: 'XXX项目1402', //房源
      rent: ' ', //3年以上（首月租金）
      commission: '  ', //提成比例
      rent1: '10000', //3年以内（首月租金）
      commission1: '100%', //提成比例
      area: ' ', //签约面积
      commission3: ' ', //提成比例
      targetcompletiontime: '2023-03-01', //提成目标完成间时
      totalcommission: '10000元', //租赁总提成
      testotalamountdeducted: '2000元', //扣除总额
      distribution: '10000元', //此次发放总额
    },
    {
      key: '3',
      id: 3, //序号
      commissionAgent: '黄茜茜-13111112222', //分佣人员
      commissionRole: '招商主管', //分佣职务
      property: 'XXX项目1403', //房源
      rent: '10000元', //3年以上（首月租金）
      commission: '100%', //提成比例
      rent1: '', //3年以内（首月租金）
      commission1: '', //提成比例
      area: '', //签约面积
      commission3: '', //提成比例
      targetcompletiontime: '2023-03-01', //提成目标完成间时
      totalcommission: '10000元', //租赁总提成
      testotalamountdeducted: '0', //扣除总额
      distribution: '5000元', //此次发放总额
    },
    {
      key: '4',
      id: 4, //序号
      commissionAgent: '黄嘿嘿-13111112222', //分佣人员
      commissionRole: '招商经理', //分佣职务
      property: 'XXX项目1404', //房源
      rent: '', //3年以上（首月租金）
      commission: '', //提成比例
      rent1: '', //3年以内（首月租金）
      commission1: '%', //提成比例
      area: '10000㎡', //签约面积
      commission3: '*0.5', //提成比例
      targetcompletiontime: '2023-03-01', //提成目标完成间时
      totalcommission: '5000元', //租赁总提成
      testotalamountdeducted: '0元', //扣除总额
      distribution: '5000元', //此次发放总额
    },
    {
      key: '4',
      id: '总计', //序号
      commissionAgent: '-', //分佣人员
      commissionRole: '-', //分佣职务
      property: '-', //房源
      rent: '25000元', //3年以上（首月租金）
      commission: '-', //提成比例
      rent1: '10000元', //3年以内（首月租金）
      commission1: '-', //提成比例
      area: '10000㎡', //签约面积
      commission3: '-', //提成比例
      targetcompletiontime: '2023-03-01', //提成目标完成间时
      totalcommission: '40000元', //租赁总提成
      testotalamountdeducted: '4000元', //扣除总额
      distribution: '27500元', //此次发放总额
    },
  ];
</script>

<style scoped>
  .title {
    margin: 5px 20px;
    width: fitContent;
    border-left: 3px solid #1890ff;
    border-radius: 3px;
    padding-left: 5px;
  }
</style>
