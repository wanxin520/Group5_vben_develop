<!-- eslint-disable vue/no-parsing-error -->
<template>
  <Row>
    <Col
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 24 }"
      :lg="{ span: 24 }"
      :xl="{ span: 24 }"
      :xxl="{ span: 24 }"
    >
      <div class="text-[16px] mb-3 font-bold">选择项目</div>

      <Select
        class="w-[200px]"
        defaultActiveFirstOption
        v-model:value="selectRes1"
        @change="selectResChange1"
      >
        <SelectOption value="0">E+SPACE</SelectOption>
        <SelectOption value="1">软件新城</SelectOption>
        <SelectOption value="2">创新园区</SelectOption>
        <SelectOption value="3">创智园区 </SelectOption>
        <SelectOption value="4">测试公寓楼栋</SelectOption>
      </Select>
    </Col>
  </Row>
  <div class="text-[16px] mb-3 font-bold">客户信息</div>
  <Row>
    <Col
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
      :xl="{ span: 12 }"
      :xxl="{ span: 12 }"
    >
      <span>租赁提成标准:</span>
      <Select
        class="w-[200px]"
        defaultActiveFirstOption
        v-model:value="selectRes2"
        @change="selectResChange2"
      >
        <SelectOption value="0">自主招商</SelectOption>
        <SelectOption value="1">全民营销</SelectOption>
        <SelectOption value="2">产业合作部网络推荐 </SelectOption>
        <SelectOption value="3">产业合作部机构推荐 </SelectOption>
        <SelectOption value="4">产业合作部个人推荐</SelectOption>
        <SelectOption value="5">产业合作部优质企业</SelectOption>
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
      <span>行业内/行业外:</span>
      <Select
        class="w-[200px]"
        defaultActiveFirstOption
        v-model:value="selectRes3"
        @change="selectResChange3"
      >
        <SelectOption value="0">请选择</SelectOption>
        <SelectOption value="1">行业内</SelectOption>
        <SelectOption value="2">行业外</SelectOption>
      </Select>
    </Col>
  </Row>
  <div class="text-[16px] mb-3 font-bold">租赁信息</div>
  <Row>
    <Col
      :xs="{ span: 24 }"
      :sm="{ span: 24 }"
      :md="{ span: 12 }"
      :lg="{ span: 12 }"
      :xl="{ span: 12 }"
      :xxl="{ span: 12 }"
    >
      <span>签约类型:</span>
      <Select
        class="w-[200px]"
        defaultActiveFirstOption
        v-model:value="selectRes4"
        @change="selectResChange4"
      >
        <SelectOption value="0">新签</SelectOption>
        <SelectOption value="1">续签</SelectOption>
        <SelectOption value="2">其他</SelectOption>
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
      <span> 签约时长:</span>
      <Select
        class="w-[200px]"
        defaultActiveFirstOption
        v-model:value="selectRes5"
        @change="selectResChange5"
      >
        // eslint-disable-next-line vue/no-parsing-error
        <SelectOption value="0"> <1年 </SelectOption>
        <SelectOption value="1">1年≤X2年</SelectOption>
        <SelectOption value="2">2年≤X3年</SelectOption>
        <SelectOption value="2">≥3年</SelectOption>
      </Select>
    </Col>
  </Row>
  <div class="text-[16px] mb-3 font-bold">分佣规则</div>
  <Row class="border border-2 border-gray-500 border-double rounded-md">
    <Col>
      <div>
        <Row>
          <Col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :md="{ span: 8 }"
            :lg="{ span: 8 }"
            :xl="{ span: 8 }"
            :xxl="{ span: 8 }"
          >
            <span> 分佣职务:</span>
            <Select
              class="w-[100px]"
              defaultActiveFirstOption
              v-model:value="selectRes6"
              @change="selectResChange6"
            >
              <SelectOption value="0"> 请选择 </SelectOption>
              <SelectOption value="1">签约人</SelectOption>
              <SelectOption value="2">招商专员</SelectOption>
              <SelectOption value="2">招商主管</SelectOption>
              <SelectOption value="2">招商经理 </SelectOption>
              <SelectOption value="2">全民营销推荐人</SelectOption>
            </Select></Col
          >
          <Col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :md="{ span: 8 }"
            :lg="{ span: 8 }"
            :xl="{ span: 8 }"
            :xxl="{ span: 8 }"
            ><span> 分佣人员:</span>
            <Select
              class="w-[100px]"
              defaultActiveFirstOption
              v-model:value="selectRes7"
              @change="selectResChange7"
            >
              <SelectOption value="0"> 请选择 </SelectOption>
              <SelectOption value="1">签约人</SelectOption>
              <SelectOption value="2">招商专员</SelectOption>
              <SelectOption value="2">招商主管</SelectOption>
              <SelectOption value="2">招商经理 </SelectOption>
              <SelectOption value="2">外部人员</SelectOption>
            </Select></Col
          >
          <Col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :md="{ span: 8 }"
            :lg="{ span: 8 }"
            :xl="{ span: 8 }"
            :xxl="{ span: 8 }"
            ><span> 提成总额:</span>

            <InputGroup compact>
              <Select
                class="w-[100px]"
                defaultActiveFirstOption
                v-model:value="selectRes9"
                @change="selectResChange9"
              >
                <SelectOption value="0"> 请选择 </SelectOption>
                <SelectOption value="1">按首月(完整)月租金</SelectOption>
                <SelectOption value="2">按照租赁面积</SelectOption>
              </Select>
              <AutoComplete v-model:value="value16" style="width: 100px" placeholder="请输入%" />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <span>发放规则:分</span
              ><Select
                class="w-[50px]"
                defaultActiveFirstOption
                v-model:value="selectRes10"
                @change="selectResChange10"
              >
                <SelectOption value="0">1 </SelectOption>
                <SelectOption value="1">2</SelectOption>
                <SelectOption value="2">3</SelectOption>
                <SelectOption value="2">自定义</SelectOption>
              </Select>
              <span>次发放</span>,
              <span>第1次发放<Input style="width: 100px" v-model:value="value11" />%</span>
              <span>第2次发放<Input style="width: 100px" v-model:value="value11" />%</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Checkbox v-model:checked="checked">设置逾期规则</Checkbox>
            <span
              >每逾期<Input style="width: 100px" v-model:value="value11" />天，扣除提成的<Input
                style="width: 100px"
                v-model:value="value11"
              />%</span
            >
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
  <Row>
    <Col>
      <div class="flex items-center justify-center"
        ><div><Button type="primary">继续添加</Button></div></div
      >
    </Col>
  </Row>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import {
    Col,
    Row,
    Select,
    SelectOption,
    InputGroup,
    AutoComplete,
    Input,
    Checkbox,
    Button,
  } from 'ant-design-vue';
  const checked = ref(false);
  const value16 = ref<string>('');

  // 下拉选择框1
  const selectRes1 = ref('E+SPACE');
  const selectResChange1 = (value: string) => {
    console.log(value);
    console.log(selectRes1);
  };
  // 下拉选择框2
  const selectRes2 = ref('自主招商');
  const selectResChange2 = (value: string) => {
    console.log(value);
    console.log(selectRes2);
  };
  // 下拉选择框3
  const selectRes3 = ref('请选择');
  const selectResChange3 = (value: string) => {
    console.log(value);
    console.log(selectRes3);
  };
  // 下拉选择框4
  const selectRes4 = ref('请选择');
  const selectResChange4 = (value: string) => {
    console.log(value);
    console.log(selectRes4);
  };
  // 下拉选择框5
  const selectRes5 = ref('请选择');
  const selectResChange5 = (value: string) => {
    console.log(value);
    console.log(selectRes5);
  };
  // 下拉选择框6
  const selectRes6 = ref('请选择');
  const selectResChange6 = (value: string) => {
    console.log(value);
    console.log(selectRes6);
  };
  // 下拉选择框7
  const selectRes7 = ref('请选择');
  const selectResChange7 = (value: string) => {
    console.log(value);
    console.log(selectRes7);
  };
  // 下拉选择框9
  const selectRes9 = ref('请选择');
  const selectResChange9 = (value: string) => {
    console.log(value);
    console.log(selectRes9);
  };
  // 下拉选择框10
  const selectRes10 = ref('');
  const selectResChange10 = (value: string) => {
    console.log(value);
    console.log(selectRes10);
  };
  const value11 = ref<string>('请输入');
</script>
