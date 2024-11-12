<script setup>
import { ref } from "vue"


// 定义表格字段
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    slots: { customRender: 'index' },
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    slots: { customRender: 'status' },
  },
  {
    title: '模板名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '作用范围',
    key: 'scope',
    dataIndex: 'scope',
    slots: { customRender: 'scope' },
  },
  {
    title: '接收邮箱',
    key: 'email',
    dataIndex: 'email',
    slots: { customRender: 'emial' },
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
    slots: { customRender: 'createTime' },
  },
  {
    title: '是否认证',
    key: 'isAuth',
    dataIndex: 'isAuth',
    slots: { customRender: 'isAuth' },
  },
  {
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
  },
];

</script>

<template>
  <div>
    <a-table :loading="loading" :columns="columns" :data-source="contractList" :row-key="record => record.id">
      <template #index="{ record, index }">
        {{ index + 1 }}
      </template>
      <template #status="{ record }">
        <a-tag color="#87d068" v-if="record.status == 0">
          <template #icon>
            <BranchesOutlined />
          </template>
          启用
        </a-tag>
        <a-tag color="#cd201f" v-if="record.status == 1">
          <template #icon>
            <MinusCircleOutlined />
          </template>
          禁用
        </a-tag>
      </template>
      <template #action="{ record, index }">
        <a-popover>
          <template #content>
            <p @click="actionFeedback(option.name, index)" v-for="(option) in actionOptions" :key="option.id">
              {{ option.name }}
            </p>
          </template>
          <MoreOutlined />
        </a-popover>
      </template>
      <template #scope="{ record, index }">
        <div v-if="record.scope == 1">科技园</div>
        <div v-else-if="record.scope == 2">招商策划</div>
        <div v-else-if="record.scope == 3">运营管理部</div>
      </template>
      <template #isAuth="{ record }">
        <a-tag color="#9f9f9f" v-if="record.isAuth == 0">
          未认证
        </a-tag>
        <a-tag color="#f50" v-if="record.isAuth == 1">
          认证中
        </a-tag>
        <a-tag color="#87d068" v-if="record.isAuth == 2">
          已认证
        </a-tag>
      </template>
    </a-table>
  </div>
</template>
<style scoped></style>