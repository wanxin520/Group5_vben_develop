<template>
  <PageWrapper>
    <Row v-for="item in invoicedetails" :key="item">
      <Col :span="24">
        <div> 房源地址: {{ item.property_address }}</div>
      </Col>
      <Col>
        <Row>
          <Col :span="6">
            <div class="flex">
              <Icon
                icon="ant-design:red-envelope-filled"
                class="w-[25px] h-[25px] rounded-full bg-red-100 m-[5px]"
              />
              <div>
                <div class="text-[gray]">
                  {{ item.CurrentStatus }}
                </div>
                <div>
                  {{ item.Reversed }}
                </div>
              </div>
            </div>
          </Col>
          <Col :span="6">
            <div class="flex">
              <Icon
                icon="ic:baseline-portrait"
                class="w-[25px] h-[25px] rounded-full bg-red-100 m-[5px]"
              />
              <div>
                <div class="text-[gray]">
                  {{ item.Applicant }}
                </div>
                <div> {{ item.Name }}-{{ item.Phone }} </div>
              </div>
            </div>
          </Col>
          <Col :span="6">
            <div class="flex">
              <div
                ><Icon
                  icon="ic:baseline-portrait"
                  class="w-[25px] h-[25px] rounded-full bg-red-100 m-[5px]"
              /></div>
              <div>
                <div class="text-[gray]">{{ item.ApplicationPlatform }}</div>
                <div>{{ item.TenantSide }}</div>
              </div>
            </div>
          </Col>
          <Col :span="6">
            <div class="flex">
              <Icon
                icon="ic:baseline-portrait"
                class="w-[25px] h-[25px] rounded-full bg-red-100 m-[5px]"
              />
              <div>
                <div class="text-[gray]">
                  {{ item.ApplicationDate }}
                </div>
                <div>
                  {{ item.Data }}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col>
        <Tabs v-model:activeKey="activeKey">
          <TabPane key="1" tab="申请信息">
            <Row>
              <Col>开票商品信息</Col>
              <Col :span="24">
                <div>
                  <Table :dataSource="invoiced" :columns="InvoicedProduct.columns" />
                </div>
              </Col>
            </Row>

            <Col :span="24"> 购买方/发票抬头信息 </Col>
            <Row v-for="item in purchaseInfor" :key="item.purchaseInformationData">
              <Col :span="6">
                <div>
                  <div class="text-[gray]">{{ item.BuyerType }}</div>
                  <div>{{ item.personal }}</div>
                </div>
              </Col>
              <Col :span="6">
                <div>
                  <div class="text-[gray]">{{ item.BuyerName }}</div>
                  <div>{{ item.Name }}</div>
                </div>
              </Col>
              <Col :span="6">
                <div>
                  <div class="text-[gray]">{{ item.BuyerTaxNumber }}</div>
                  <div>{{ item.Number }}</div>
                </div>
              </Col>
              <Col :span="6">
                <div>
                  <div class="text-[gray]">{{ item.PropertyAddress }}</div>
                  <div>{{ item.ress }}</div>
                </div>
              </Col>
            </Row>
            <Row v-for="item in purchaseInfor" :key="item.purchaseInformationData">
              <Col :span="6">
                <div>
                  <div>{{ item.BuyerPhoneNumber }}</div>
                  <div>{{ item.PhoneNumber }}</div>
                </div>
              </Col>
              <Col :span="6">
                <div>
                  <div>{{ item.BuyerBankName }}</div>
                  <div>{{ item.BankName }}</div>
                </div>
              </Col>
              <Col :span="6">
                <div>
                  <div>{{ item.BuyerBankAccountNumber }}</div>
                  <div>{{ item.BankAccountNumber }}</div>
                </div>
              </Col>
              <Col :span="6">
                <div></div>
              </Col>
            </Row>
            <Row v-for="item in purchaseInfor" :key="item.purchaseInformationData">
              <Col :span="24">
                <div>
                  <div>{{ item.Note }}</div>
                  <div>{{ item.Address }}</div>
                </div>
              </Col>
            </Row>

            <Row
              class="p-[10px]"
              v-for="item in applicantInfor"
              :key="item.applicantInformationData"
            >
              <Col :span="24">申请方信息</Col>
              <Col :span="8">
                <div>
                  <div>
                    {{ item.DeliveryEmail }}
                  </div>
                  <div> {{ item.Email }}</div>
                </div>
              </Col>
              <Col :span="8">
                <div>
                  <div>
                    {{ item.DeliveryMobileNumber }}
                  </div>
                  <div> {{ item.Number }}</div>
                </div>
              </Col>
              <Col :span="8">
                <div>
                  <div>
                    {{ item.ApplicationDate }}
                  </div>
                  <div> {{ item.Date }}</div>
                </div>
              </Col>
            </Row>
            <Row class="p-[10px]">
              <Col :span="24">发票信息</Col>
              <Col :span="24">
                <Table :dataSource="invoiceInfor" :columns="Invoicemation.columns" />
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </PageWrapper>
</template>
<script setup>
  import { Row, Col } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { Icon } from '@iconify/vue';
  import { ref } from 'vue';
  const activeKey = ref('1');
  import { Tabs, TabPane, Table } from 'ant-design-vue';
  const invoicedetails = ref();
  import { getstatusList } from '/@/api/financialmanagement/status';
  getstatusList()
    .then((res) => {
      invoicedetails.value = res.invoicedetailsData.invoicedetailsData;
      console.log('invoicedetails.value', invoicedetails.value);
    })
    .catch((err) => {
      console.log(err);
    });

  import InvoicedProduct from '../computer/InvoicedProduct';
  const invoiced = ref();
  import { getinvoicedProductInformation } from '/@/api/financialmanagement/invoicedProductInformation';
  getinvoicedProductInformation()
    .then((res) => {
      invoiced.value = res.invoicedProductInformationData.invoicedProductInformationData;
      console.log('invoiced', invoiced.value);
    })
    .catch((err) => {
      console.log(err);
    });

  import { getpurchaseInformation } from '/@/api/financialmanagement/purchaseInformation';
  const purchaseInfor = ref();
  getpurchaseInformation()
    .then((res) => {
      purchaseInfor.value = res.purchaseInformationData;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  import { getapplicantInformation } from '/@/api/financialmanagement/applicantInformation';
  const applicantInfor = ref();
  getapplicantInformation()
    .then((res) => {
      applicantInfor.value = res.applicantInformationData;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  import { getinvoiceInformation } from '/@/api/financialmanagement/invoiceInformation';
  import Invoicemation from '../computer/Invoicemation';
  const invoiceInfor = ref();
  getinvoiceInformation()
    .then((res) => {
      invoiceInfor.value = res.invoiceInformationData.invoiceInformationData;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
</script>
