<template>
  <PageWrapper>
    <Row>
      <Col :span="24">
        <div v-for="item in Management" :key="item.auditManagement" class="flex flex-row w-[580px]">
          <div class="">合计:</div>
          <div class="flex flex-row">
            <div class="ml-[5px]">全额(不含税):{{ item.FullAmount }}</div>
            <div class="ml-[5px]">税额:{{ item.TaxAmount }}</div>
            <div>价税合计:{{ item.TotalPriceIncludingTax }}</div>
          </div>
        </div>
      </Col>
      <Col :span="24">
        <Table :dataSource="invoicerecordsData" :columns="invoicerecords.columns">
          <template #status="{ record }">
            <!--  -->
            <div>{{ dictData[record.status] }}</div>
          </template>
          <template #Operation="{ record }">
            <Status :code="record.status" />
          </template>
        </Table>
      </Col>
    </Row>
  </PageWrapper>
</template>
<script setup>
  import { getSysDict } from '/@/api/dict';
  import { ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Row, Col, Table } from 'ant-design-vue';
  import Status from './status.vue';
  import { getFinancialManagement } from '/@/api/financialmanagement/index';
  import invoicerecords from '../computer/invoicerecords';

  const dictData = ref();
  const Management = ref();
  const invoicerecordsData = ref();
  getSysDict().then((res) => {
    dictData.value = res;
    console.log('dict', dictData.value);
  });
  getFinancialManagement()
    .then((res) => {
      Management.value = res.auditManagement;
      invoicerecordsData.value = res.managementData.managementData;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
</script>
