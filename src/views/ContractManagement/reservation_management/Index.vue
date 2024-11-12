<script setup>
import { ref,watch } from "vue"
import { message } from "ant-design-vue";
import { useRequest } from "vue-request";
import { MoreOutlined, MinusCircleOutlined, BranchesOutlined } from "@ant-design/icons-vue"
import { getContractData } from '/@/api/ContractManagement'
const current = ref(['all']);
// 获取列表数据
const { data, loading } = useRequest(() => getContractData())

// 监听数据变化
watch(data, () => {
  console.log(data.value.reservationManage);
})

</script>

<template>
  <div>
    <div>
      <a-menu v-model:selectedKeys="current" mode="horizontal" @select="selectedMenu">
        <a-menu-item key="all">
          全部
        </a-menu-item>
        <a-menu-item key="effective">
          待生效
        </a-menu-item>
        <a-menu-item key="checkIn">
          待入驻
        </a-menu-item>
        <a-menu-item key="checkedIn">
          已入住
        </a-menu-item>
        <a-menu-item key="unsubscribe">
          已退订
        </a-menu-item>
        <a-menu-item key="invalid">
          无效
        </a-menu-item>
      </a-menu>
      <div class="w-[100%] mt-2 flex h-[100%] justify-between items-center">
        <div class="w-[70%] rounded-[10px] ml-2">
          <a-input-search v-model:value="searchFeilds" placeholder="房源编号/房源地址/房间号/项目名称/预订人姓名/电话/编号"
            @change="onSearchFeilds" enter-button @search="onSearchFeilds" />
        </div>
        <a-button type="primary" class="mr-2" @click="addReservation">添加预定</a-button>
      </div>
    </div>

    <div class="w-[100%] mt-1">

    </div>
  </div>
</template>
<style scoped></style>