<template>
  <!-- <div class="flex flex-col items-center p-6"> -->
  <!-- <div class="bg-white shadow-md rounded-lg w-full max-w-2xl"> -->
  <div class="text-gray-600 bg-[#e6f3fe] flex text-center">
    <p>房源地址：武汉市东湖高新区软件园1.1期B区A11栋613室</p>
    <span>
      <Icon icon="system-uicons:search" width="20px" height="20px" style="color: #0960bd" />
    </span>
  </div>
  <div class="p-4">
    <h3 class="text-md font-bold mb-2">合约信息</h3>
    <div class="flex justify-around">
      <div><strong>月租金：</strong>9000元/月</div>
      <div><strong>押金：</strong>9000元</div>
      <div><strong>付款方式：</strong>押一付一</div>
      <div><strong>合同期限：</strong>2023-02-01 ~ 2024-01-31 (1年)</div>
    </div>
  </div>
  <div class="p-4 border-t">
    <h3 class="text-md font-semibold mb-2">提成分佣信息</h3>
    <div class="space-y-4 border-gray-500">
      <div class="bg-gray-100 p-4 rounded-lg">
        <div class="flex justify-between border-gray-400 solid">
          <div>
            <div>分佣人员</div>
            <div>黄哈哈-13579999988</div>
          </div>
          <div>
            <div>分佣职位</div>
            <div>黄招商专员/主管</div>
          </div>
          <div>
            <div>提成总额5000元</div>
            <div>已发放提成1000元</div>
          </div>
        </div>
        <div class="border-b border-dashed border-gray-400 my-4"></div>
        <div class="mt-2">
          <strong>发放记录：</strong>
          <ul class="list-disc ml-5">
            <li>第一次发放金额：xxxx元，发放时间：2023-02-03 12:12，备注：xxxxxxx</li>
            <li>第一次发放金额：xxxx元，发放时间：2023-02-01 12:12，备注：xxxxxxx</li>
          </ul>
        </div>
      </div>
      <div class="bg-gray-100 p-4 rounded-lg">
        <div class="flex justify-between">
          <div>
            <div>分佣人员</div>
            <div>黄哈哈-13579999988</div>
          </div>
          <div>
            <div>分佣职位</div>
            <div>招商经理</div>
          </div>
          <div>
            <div>提成总额5000元</div>
            <div>已发放提成1000元</div>
          </div>
        </div>
        <div class="border-b border-dashed border-gray-400 my-4"></div>
        <div class="mt-2">
          <strong>发放记录：</strong>
          <ul class="list-disc ml-5">
            <li>第一次发放金额：xxxx元，发放时间：2023-02-03 12:12，备注：xxxxxxx</li>
            <li>第一次发放金额：xxxx元，发放时间：2023-02-01 12:12，备注：xxxxxxx</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>
<script lang="ts" setup>
  import { Icon } from '@iconify/vue';
</script>
