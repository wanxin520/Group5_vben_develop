<script setup>
import { ref } from "vue"
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import ContractManagement from "/@/views/ContractManagement/contract_configuration/children/ContractAuthentication.vue";
import ReservationAgreementTemplate from "/@/views/ContractManagement/contract_configuration/children/ReservationAgreementTemplate.vue";
import TenantContractTemplate from "/@/views/ContractManagement/contract_configuration/children/TenantContractTemplate.vue";
import TerminationAgreementTemplate from "/@/views/ContractManagement/contract_configuration/children/TerminationAgreementTemplate.vue";

const current = ref(['tenant']);

</script>

<template>
  <div>
    <div>
      <a-menu v-model:selectedKeys="current" mode="horizontal" @select="selectedMenu">
        <a-menu-item key="tenant">
          <template #icon>
            <mail-outlined />
          </template>
          租客电子合同模板
        </a-menu-item>
        <a-menu-item key="reserve">
          <template #icon>
            <appstore-outlined />
          </template>
          预订协议模板
        </a-menu-item>
        <a-menu-item key="rented">
          <template #icon>
            <setting-outlined />
          </template>
          租客退租协议模板
        </a-menu-item>
        <a-menu-item key="auth">
          合同认证
        </a-menu-item>
      </a-menu>
    </div>

    <div class="w-[100%] mt-1">
      <div v-if="current[0] === 'tenant'">
        <TenantContractTemplate></TenantContractTemplate>
      </div>
      <div v-if="current[0] === 'reserve'">
        <ReservationAgreementTemplate></ReservationAgreementTemplate>
      </div>
      <div v-if="current[0] === 'rented'">
        <TerminationAgreementTemplate></TerminationAgreementTemplate>
      </div>
      <div v-if="current[0] === 'auth'">
        <ContractManagement></ContractManagement>
      </div>
    </div>
  </div>
</template>
<style scoped></style>