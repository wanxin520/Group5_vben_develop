<!-- eslint-disable vue/valid-v-slot -->
<template>
  <Popover title="Title" trigger="click">
    <template #content v-if="props.code === 70001">
      <p @click="confirm">重新开票</p>
      <p @click="confirm1">作废</p>
      <p @click="invoiceDetails1">开票详情</p>
      <Modal v-model:visible="visible1" title="开票详情" @ok="invoiceDetailsModal">
        <InvoiceDetails />
      </Modal>
      <p @click="transactionDetails">流水详情</p>
      <Modal v-model:visible="visible" title="流水详情" @ok="transactionModal">
        <TransactionDetails />
      </Modal>
    </template>
    <template v-if="props.code === 70002" #content>
      <p>2</p>
    </template>
    <Icon icon="nimbus:ellipsis" />
  </Popover>
</template>
<script setup>
  import TransactionDetails from './transactionDetails.vue';
  import InvoiceDetails from './InvoiceDetails.vue';
  import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
  import { ref, createVNode, defineProps } from 'vue';
  import { Popover, Modal } from 'ant-design-vue';
  import { Icon } from '@iconify/vue';
  const props = defineProps({
    code: Number,
  });
  const visible = ref(false);
  const visible1 = ref(false);

  const confirm = () => {
    Modal.confirm({
      title: '确定要重新提交开票申请吗？',
      icon: createVNode(ExclamationCircleOutlined),
      content: '重新提交开票暂不支持编辑开票信息，提交后将无需确认，直接进入开票流程，请知晓',
      okText: '确认',
      cancelText: '取消',
    });
  };
  const confirm1 = () => {
    Modal.confirm({
      title: '确定要作废开票申请吗',
      icon: createVNode(ExclamationCircleOutlined),
      content: '作废后，不支持恢复，请确认',
      okText: '确认',
      cancelText: '取消',
    });
  };
  const invoiceDetails1 = () => {
    visible1.value = true;
  };
  const invoiceDetailsModal = () => {
    visible1.value = false;
  };
  const transactionDetails = () => {
    visible.value = true;
  };
  const transactionModal = () => {
    visible.value = false;
  };
</script>
