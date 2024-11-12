<template>
  <PageWrapper>
    <Row>
      <Col
        :sm="{ span: 12 }"
        :md="{ span: 12 }"
        :xs="{ span: 12 }"
        :lg="{ span: 12 }"
        :xl="{ span: 12 }"
        :push="1"
      >
        <div class="InvoiceService">发票服务</div>
      </Col>
      <Col :span="12" :push="9">
        <Button type="primary" class="rounded-[5px]">添加账单</Button>
      </Col>
      <Row>
        <Col :md="{ span: 24 }" :push="1">
          <Tabs>
            <TabPane key="1" tab="开票记录">
              <Row>
                <Col
                  :sm="{ span: 17 }"
                  :md="{ span: 17 }"
                  :xs="{ span: 17 }"
                  :lg="{ span: 17 }"
                  :xl="{ span: 17 }"
                >
                  <Tabs v-model:activeKey="activeKey">
                    <TabPane key="1" tab="全部" />
                    <TabPane key="2" tab="待处理" />
                    <TabPane key="3" tab="开票中" />
                    <TabPane key="4" tab="已开票" />
                    <TabPane key="5" tab="开票失败" />
                    <TabPane key="6" tab="已冲红" />
                    <TabPane key="6" tab="已作废" />
                  </Tabs>
                </Col>
                <Col
                  :xl="{ span: 7 }"
                  :xs="{ span: 7 }"
                  :lg="{ span: 7 }"
                  :sm="{ span: 7 }"
                  :md="{ span: 7 }"
                >
                  <div class="flex flex-row items-center">
                    <Input
                      v-model:value="value"
                      placeholder="房源编号/房源地址/租客姓名/购方名称/购方税"
                      style="width: 300px; height: 25px"
                    />
                    <Icon
                      icon="material-symbols:download-sharp"
                      style="color: #1989fa; width: 30px; height: 30px"
                    />
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane key="2" tab="销项设置"> 1 </TabPane>
          </Tabs>
        </Col>
        <Col :span="24"> <Invoicerecords /></Col>
      </Row>
    </Row>
  </PageWrapper>
</template>
<script setup>
  import Invoicerecords from '../Details/invoicerecords.vue';
  import { Row, Col, Tabs, TabPane, Button, Input } from 'ant-design-vue';
  import { Icon } from '@iconify/vue';
  import { PageWrapper } from '/@/components/Page';
  import { ref } from 'vue';
  const value = ref();
</script>
<style scoped>
  .InvoiceService {
    border-left: 4px solid #1987fa;
    border-radius: 2px;
    padding-left: 10px;
    margin: 10px;
    font-weight: bold;
  }
</style>
