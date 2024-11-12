<template>
  <div class="w-full bg-white">
    <Tabs v-model:activeKey="activeKey">
      <TabPane key="1" tab="租赁提成明细">
        <detailedPage />
      </TabPane>
      <TabPane key="2" tab="租赁提成汇总" force-render>
        <recordPage />
      </TabPane>
      <TabPane key="3" tab="发放记录">
        <summaryPage />
      </TabPane>
    </Tabs>

    <!-- <Empty /> -->
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Tabs, TabPane } from 'ant-design-vue';
  import detailedPage from './Commission/detailedPage/detailedPage.vue';
  import recordPage from './Commission/recordPage/recordPage.vue';
  import summaryPage from './Commission/summaryPage/summaryPage.vue';
  const activeKey = ref('1');
</script>
