<script setup>
import { ref } from "vue"
import { VerifiedOutlined } from "@ant-design/icons-vue"


</script>

<template>
  <div class="w-[100%] h-[100%]">
    <div class="flex flex-col justify-start items-start w-[100%] h-[100%] p-2 ml-2">
      <p class="text-[20px] font-bold">认证主体</p>
      <p class="text-[12px] text-[#ffa836]">由“e签宝”和“契约锁”提供法律认证”</p>
    </div>
    <div class="flex w-[100%] h-[100%] justify-center items-center flex-wrap p-2">
      <div v-for="item in 7" class="m-2">
        <a-card style="width: 300px; height: 200px">
          <div class="w-[100%] h-[100%] flex justify-between items-start">
            <div>
              <p class="text-[14px] font-bold">武汉东湖高新发展有限公司</p>
              <p class="text-[12px] text-[#ffa836]">由“e签宝”提供法律认证”</p>
              <p class="text-[12px]">经办人电话：027-4654-8545</p>
              <p class="text-[12px]">法人姓名：石玉全</p>
              <p class="text-[12px]">经办人姓名：李江涛</p>
            </div>
            <div>
              <a-tag v-if="true" color="#f50">认证中</a-tag>
              <a-tag v-else color="#108ee9">已认证</a-tag>
            </div>
          </div>
        </a-card>
      </div>
      <div class=" m-2">
        <a-card style="width: 300px; height: 200px">
          <div class="w-[100%] h-[100%] flex flex-col justify-center items-center">
            <div>
              <VerifiedOutlined class="text-[3rem]" style="color: #108ee9;"></VerifiedOutlined>
            </div>
            <div class="mt-6">认证其他主体</div>
          </div>
        </a-card>
      </div>
    </div>
  </div>

</template>
<style scoped></style>