<template>
  <Row class="mx-5 mt-5">
    <Col
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
      :xl="{ span: 12 }"
      :xxl="{ span: 12 }"
    >
      <div class="text-[16px] mb-3">选择项目</div>

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
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
      :xl="{ span: 12 }"
      :xxl="{ span: 12 }"
    >
      <div class="flex justify-end">
        <div>
          <Button @click="selectShowModal" class="mr-auto" type="primary">新增分佣配置</Button></div
        >
        <Modal v-model:visible="selectVisible" width="766px">
          <template #title>
            <h2 class="text-lg text-[#1989fa]">新增分佣配置</h2>
          </template>
          <selectPage />
        </Modal>
      </div>
    </Col>
  </Row>

  <Row class="mx-5 mt-5">
    <Col>
      <div>签约业绩提成配置表</div>
      <Table :dataSource="tableDate" :columns="tableconfig.columns">
        <template #look="">
          <div @click="editShowModal" class="text-blue-500">编辑</div>
        </template>

        <template #action="">
          <div @click="disabledShowModal" class="text-blue-500 text-red-500">禁用</div>
        </template>
      </Table>

      <div>
        <Modal v-model:visible="editVisible" width="766px">
          <template #title>
            <h2 class="text-lg text-[#1989fa]">新增分佣配置</h2>
          </template>
          <editPage />
        </Modal>
        <Modal v-model:visible="disabledVisible" width="300px">
          <disabled />
        </Modal>
      </div>
    </Col>
  </Row>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { Col, Row, Select, SelectOption, Button, Table, Modal } from 'ant-design-vue';
  import { getWorkbenchData } from '/@/api/PerformanceManagement';
  import tableconfig from './tableconfig';
  import editPage from './editPage.vue';
  import disabled from './disabled.vue';
  import selectPage from './selectPage.vue';

  //编辑的弹框
  const editVisible = ref(false);
  const editShowModal = () => {
    editVisible.value = true;
  };
  //禁用的弹框
  const disabledVisible = ref(false);
  const disabledShowModal = () => {
    disabledVisible.value = true;
  };
  //新增的弹框
  const selectVisible = ref(false);
  const selectShowModal = () => {
    selectVisible.value = true;
  };

  // 下拉选择框
  const selectRes = ref('不限');
  const selectResChange = (value: string) => {
    console.log(value);
    console.log(selectRes);
  };
  // 表格
  const tableDate = ref();
  getWorkbenchData()
    .then((res) => {
      tableDate.value = res.table.table;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
</script>
