<template>
  <Row class="mb-5">
    <Col
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 8 }"
      :lg="{ span: 8 }"
      :xl="{ span: 8 }"
      :xxl="{ span: 8 }"
    >
      <div>
        <div class="mb-5"> 选择项目：</div>

        <Select
          v-model:value="value"
          show-search
          placeholder="Select a position"
          style="width: 200px"
          :options="options"
          :filter-option="filterOption"
          @focus="handleFocus"
          @blur="handleBlur"
          @change:string="handleChange"
        />
      </div>
    </Col>
    <Col
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 8 }"
      :lg="{ span: 8 }"
      :xl="{ span: 8 }"
      :xxl="{ span: 8 }"
    >
      <div class="mb-5"> 选择维度：</div>
      <Select
        v-model:value="peopValue"
        show-search
        style="width: 200px"
        :options="peopOptions"
        :filter-option="filterpeop"
        @focus="peopFocus"
        @blur="peopBlur"
        @change:string="peopChange"
      />
    </Col>
    <Col
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 8 }"
      :lg="{ span: 8 }"
      :xl="{ span: 8 }"
      :xxl="{ span: 8 }"
      ><div class="flex">
        <div class="w-[300px] h-[60px]" @click="inputShowModal">
          <Input
            v-model:value="value3"
            placeholder="模糊搜索分佣人员信息"
            style="border-radius: 20px; width: 400px"
          />
        </div>
        <div>
          <Modal v-model:visible="inputVisible" :closable="false" width="766px">
            <inputModal />
          </Modal>
        </div>
        <!-- <Icon
          icon="material-symbols:search"
          style="position: absolute; right: 10px; top: 30px; color: rgb(21 136 252)"
        /> -->
        <Icon
          class="ml-5"
          icon="hugeicons:download-01"
          style="color: #0960bd; width: 30px; height: 30px"
        />
      </div>
    </Col>
  </Row>
  <Row>
    <Col
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 24 }"
      :lg="{ span: 24 }"
      :xl="{ span: 24 }"
      :xxl="{ span: 24 }"
    >
      <Table :columns="peopconfig.columns" :dataSource="tableDate" style="width: 160%">
        <template #name="{ text }">
          <a>{{ text }}</a>
        </template>
      </Table>
    </Col></Row
  >
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { SelectTypes } from 'ant-design-vue/es/select';
  import { Row, Col, Select, Table, Input, Modal } from 'ant-design-vue';
  import { Icon } from '@iconify/vue';
  import { getWorkbenchData } from '/@/api/PerformanceManagement/index';
  import peopconfig from './peopconfig';
  import inputModal from './inputModal.vue';

  // 搜索框的弹框
  const inputVisible = ref(false);

  const inputShowModal = () => {
    inputVisible.value = true;
  };
  const tableDate = ref();
  getWorkbenchData()
    .then((res) => {
      tableDate.value = res.room.room;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  const options = ref<SelectTypes['options']>([
    { value: '不限', label: '不限' },
    { value: '软件新城', label: '软件新城' },
    { value: '邓甲新城', label: '邓甲新城' },
    { value: '创新公寓', label: '创新公寓' },
    { value: '测试公寓楼栋', label: '测试公寓楼栋' },
  ]);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleBlur = () => {
    console.log('blur');
  };

  const handleFocus = () => {
    console.log('focus');
  };
  const filterOption = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };
  // 搜索框
  const value3 = ref<string>('');
  // 下拉框
  const value = ref<string | undefined>('不限');

  const peopOptions = ref<SelectTypes['options']>([
    { value: '按分佣人员', label: '按分佣人员' },
    { value: '按房源', label: '按房源', disabled: true },
  ]);

  const peopChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const peopBlur = () => {
    console.log('blur');
  };

  const peopFocus = () => {
    console.log('focus');
  };
  const filterpeop = (input: string, option: any) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  const peopValue = ref<string | undefined>('按分佣人员');
</script>
