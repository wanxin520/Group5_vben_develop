<template>
  <PageWrapper>
    <Row v-for="item in transaction" :key="item.transactionDetailsData">
      <Col :span="24"> {{ item.PropertyAddress }}:{{ item.Address }} </Col>
      <Col :span="24">
        <Row>
          <Col :span="8">
            <div class="flex">
              <div
                ><Icon
                  icon="ic:baseline-portrait"
                  class="w-[25px] h-[25px] rounded-full bg-red-100 m-[5px]"
              /></div>
              <div>
                <div class="text-[gray]">{{ item.CurrentStatus }}</div>
                <div>{{ item.Normal }}</div>
              </div>
            </div>
          </Col>
          <Col :span="16">
            <div class="flex">
              <div class="flex">
                <div
                  ><Icon
                    icon="ic:baseline-portrait"
                    class="w-[25px] h-[25px] rounded-full bg-red-100 m-[5px]"
                /></div>
                <div>
                  <div class="text-[gray]">{{ item.PayerInformation }}</div>
                  <div>{{ item.PayerName }}</div>
                </div>
              </div>
              <div class="flex">
                <div
                  ><Icon
                    icon="ic:baseline-portrait"
                    class="w-[25px] h-[25px] rounded-full bg-red-100 m-[5px]"
                /></div>
                <div>
                  <div class="text-[gray]">{{ item.ReceivedAmount }}</div>
                  <div>{{ item.AmoutCurrency }}</div>
                </div>
              </div>
              <div class="flex">
                <div
                  ><Icon
                    icon="ic:baseline-portrait"
                    class="w-[25px] h-[25px] rounded-full bg-red-100 m-[5px]"
                /></div>
                <div>
                  <div class="text-[gray]">{{ item.ExpenseSummary }}</div>
                  <div>{{ item.HouseRent }}</div>
                </div>
              </div>
              <div class="flex">
                <div
                  ><Icon
                    icon="ic:baseline-portrait"
                    class="w-[25px] h-[25px] rounded-full bg-red-100 m-[5px]"
                /></div>
                <div>
                  <div class="text-[gray]">{{ item.ActualReceiptTime }}</div>
                  <div>{{ item.Time }}</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col :span="12">
        <Tabs v-model:activeKey="activeKey">
          <TabPane key="1" tab="支付详情">
            <div></div>
          </TabPane>
        </Tabs>
      </Col>
      <Col :span="12">
        <div class="flex">
          <div>申请开票</div>
          <div>作废</div>
          <div>锁表</div>
          <div>更多</div>
        </div>
      </Col>
    </Row>
  </PageWrapper>
</template>
<script setup>
  import { Tabs, TabPane } from 'ant-design-vue';
  import { Row, Col } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { ref } from 'vue';
  const transaction = ref();
  import { gettransactionDetailsList } from '/@/api/financialmanagement/transactionDetails';
  gettransactionDetailsList()
    .then((res) => {
      transaction.value = res.transactionDetailsData;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
</script>
