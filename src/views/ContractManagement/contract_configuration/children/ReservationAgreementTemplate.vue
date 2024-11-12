<script setup>
import { ref, watch, reactive, toRef, onMounted } from "vue"
import { message } from "ant-design-vue";
import { useRequest } from "vue-request";
import ContentEditor from "/@/views/ContractManagement/contract_configuration/hooks/ContractEditor.vue"
import { MoreOutlined, MinusCircleOutlined, BranchesOutlined } from "@ant-design/icons-vue"
import { getContractData } from '/@/api/ContractManagement'

// 获取列表数据
const { data, loading } = useRequest(() => getContractData())
// 定义子组件监听事件
const emit = defineEmits(['updatecontent'])
// 监听编辑器内容变化
const editorContent = ref();
const updateContent = (content) => {
  editorContent.value = content;
}
// 定义表格字段
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    slots: { customRender: 'index' },
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    slots: { customRender: 'status' },
  },
  {
    title: '模板名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '作用范围',
    key: 'scope',
    dataIndex: 'scope',
    slots: { customRender: 'scope' },
  },
  {
    title: '接收邮箱',
    key: 'email',
    dataIndex: 'email',
    slots: { customRender: 'emial' },
  },
  {
    title: '创建时间',
    key: 'createTime',
    dataIndex: 'createTime',
    slots: { customRender: 'createTime' },
  },
  {
    title: '是否认证',
    key: 'isAuth',
    dataIndex: 'isAuth',
    slots: { customRender: 'isAuth' },
  },
  {
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
  },
];
// 获取合同模板列表的详细数据
const contractList = toRef();
// 定义合同模板例子
const contractTemplateExample = ref();
// 监听数据变化
watch(data, () => {
  contractList.value = data.value.contractmanage;
  console.log(data.value);
  contractTemplateExample.value = data.value.contractmanage[0].content;
})
// 搜索模板名称处理函数
const searchTemplateName = ref('');
const onSearchTemplateName = () => {
  // console.log(searchTemplateName.value);
  loading.value = true;
  setTimeout(() => {
    contractList.value = data.value?.contractmanage.filter((item) => {
      return item.name.includes(searchTemplateName.value.trim());
    });
    loading.value = false;
  }, 500);
};
// 添加加载状态
const confirmLoading = ref(false);
// 添加模板弹窗处理函数
const showAddContractModal = ref(false);
const quillEditorDOM = ref(null);
const addContarct = () => {
  showAddContractModal.value = true;
};
// 定义表单数据
const addNewTemplateForm = reactive({
  templateName: "模板一",
  department: 1,
  email: "3113415005@qq.com",
  authUser: "",
});
// 封装添加合同模板的函数
const addNewContract = () => {
  contractList.value.push({
    id: new Date(),
    status: 0,//Math.floor(Math.random() * 3)
    name: addNewTemplateForm.templateName,
    scope: addNewTemplateForm.department,
    email: addNewTemplateForm.email,
    createTime: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
    isAuth: Math.floor(Math.random() * 3),
    authUser: "@string(5,10)",
    content: editorContent.value,
  })
  console.log(contractList.value[3]);
}
// 确认添加模板弹窗
const showBeforeConfirmModal = ref(false);
const confirContractOK = () => {
  confirmLoading.value = true;
  setTimeout(() => {
    addNewContract();
    showBeforeConfirmModal.value = false;
    confirmLoading.value = false;
    showAddContractModal.value = false;
    message.success("添加成功");
  }, 2000);
};
const addContractOK = () => {
  // 合同编辑完成弹出确认框
  showBeforeConfirmModal.value = true;
};
// 定义合同配置字段
const contractConfigFields = ref([
  { id: 1, name: '合同编号', active: '复制' },
  { id: 2, name: '住房地址', active: '复制' },
  { id: 3, name: '签约房源列表', active: '复制' },
  { id: 4, name: '签订房间总数', active: '复制' },
  { id: 5, name: '房屋产权编号', active: '复制' },
  { id: 6, name: '房屋户型', active: '复制' },
  { id: 7, name: '房屋总面积', active: '复制' },
  { id: 8, name: '房间面积', active: '复制' },
  { id: 9, name: '签约人姓名（管家）', active: '复制' },
  { id: 10, name: '签约人电话（管家）', active: '复制' },
  { id: 11, name: '租客姓名', active: '复制' },
  { id: 12, name: '租客性别', active: '复制' },
  { id: 13, name: '租客手机号', active: '复制' },
  { id: 14, name: '租客证件类型', active: '复制' },
  { id: 15, name: '租客证件号码', active: '复制' },
  { id: 16, name: '租客证件照（图片）', active: '复制' },
  { id: 17, name: '法定代表人', active: '复制' },
  { id: 18, name: '邮箱', active: '复制' },
  { id: 19, name: '联系地址', active: '复制' },
  { id: 20, name: '职业', active: '复制' },
  { id: 21, name: '工作单位', active: '复制' },
  { id: 22, name: '租客紧急联系人关系', active: '复制' },
  { id: 23, name: '租客紧急联系人姓名', active: '复制' },
  { id: 24, name: '租客紧急联系电话', active: '复制' },
  { id: 25, name: '委托人姓名', active: '复制' },
  { id: 26, name: '委托人性别', active: '复制' },
  { id: 27, name: '委托人手机号', active: '复制' },
  { id: 28, name: '委托人证件类型', active: '复制' },
  { id: 29, name: '委托人证件号码', active: '复制' },
  { id: 30, name: '委托人证件照（图片）', active: '复制' },
  { id: 31, name: '现居人数', active: '复制' },
]);
// 定义合同字段搜索结果
const configSearchResult = ref(contractConfigFields.value);
// 处理合同配置字段搜索
const searchContractConfig = ref();
const onSearchContractConfig = () => {
  configSearchResult.value = contractConfigFields.value.filter((item) => {
    return item.name.includes(searchContractConfig.value.trim());
  });
};
// 操作字段选项
const actionOptions = [
  { id: 1, name: '认证' },
  { id: 2, name: '预览' },
  { id: 3, name: '编辑' },
  { id: 4, name: '作用范围' },
  { id: 5, name: '复制' },
  { id: 6, name: '禁用' },
  { id: 7, name: '删除' },
];
// 预览合同弹窗
const showPreviewModal = ref(false);
const previewContractOK = () => {
  showPreviewModal.value = false;
};
// 点击操作反馈
// 定义预览索引
const previewContractContent = ref();
const actionFeedback = (option, index) => {
  switch (option) {
    case '认证':
      message.success('认证成功');
      break;
    case '预览':
      message.success('预览');
      showPreviewModal.value = true;
      previewContractContent.value = contractList.value[index].content;
      break;
    case '编辑':
      message.success('编辑');
      break;
    case '作用范围':
      message.success('显示作用范围');
      break;
    case '复制':
      message.success('复制成功');
      break;
    case '禁用':
      contractList.value[index].status = 1
      message.success('禁用成功');
      break;
    case '删除':
      contractList.value.splice(index, 1)
      message.success('删除成功');
      break;
    default:
      break;
  }
};
// 合同配置字段复制反馈
const copyFeedback = (name) => {
  message.success(`${name}复制成功`);
};
</script>

<template>
  <div class="w-[100%] mt-2 flex h-[100%] justify-between items-center">
    <div class="w-[70%] rounded-[10px] ml-2">
      <a-input-search v-model:value="searchTemplateName" placeholder="模板名称" @change="onSearchTemplateName" enter-button
        @search="onSearchTemplateName" />
    </div>
    <a-button type="primary" class="mr-2" @click="addContarct">添加协议模板</a-button>
  </div>
  <div class="p-4">
    <a-table :loading="loading" :columns="columns" :data-source="contractList" :row-key="record => record.id">
      <template #index="{ record, index }">
        {{ index + 1 }}
      </template>
      <template #status="{ record }">
        <a-tag color="#87d068" v-if="record.status == 0">
          <template #icon>
            <BranchesOutlined />

          </template>
          启用
        </a-tag>
        <a-tag color="#cd201f" v-if="record.status == 1">
          <template #icon>
            <MinusCircleOutlined />
          </template>
          禁用
        </a-tag>
      </template>
      <template #action="{ record, index }">
        <a-popover>
          <template #content>
            <p @click="actionFeedback(option.name, index)" v-for="(option) in actionOptions" :key="option.id">
              {{ option.name }}
            </p>
          </template>
          <MoreOutlined />
        </a-popover>
      </template>
      <template #scope="{ record, index }">
        <div v-if="record.scope == 1">科技园</div>
        <div v-else-if="record.scope == 2">招商策划</div>
        <div v-else-if="record.scope == 3">运营管理部</div>
      </template>
      <template #isAuth="{ record }">
        <a-tag color="#9f9f9f" v-if="record.isAuth == 0">
          未认证
        </a-tag>
        <a-tag color="#f50" v-if="record.isAuth == 1">
          认证中
        </a-tag>
        <a-tag color="#87d068" v-if="record.isAuth == 2">
          已认证
        </a-tag>
      </template>
    </a-table>
  </div>

  <!-- 添加模板弹窗 -->
  <a-modal v-model:visible="showAddContractModal" title="添加租客合同电子模板" @ok="addContractOK" width="1000px"
    wrapClassName="full-modal">
    <div class="w-[100%] min-h-[50vh] flex justify-start items-start">
      <div class="w-[25%] flex flex-col justify-start items-center h-[500px] overflow-auto">
        <div class="p-1 flex flex-col justify-center items-center">
          <p class="text-[14px] font-semibold">合同参数信息</p>
          <p class="text-[12px] text-[#ffa836] mt-2">参数复制在木板上，即可根据线上签约</p>
          <p class="text-[12px] text-[#ffa836]">时所填写的信息自动生成合同信息并补充</p>
          <div class="w-[100%]">
            <a-input-search v-model:value="searchContractConfig" placeholder="输入合同配置字段搜索"
              @change="onSearchContractConfig" @search="onSearchContractConfig" />
          </div>

        </div>
        <a-list class="demo-loadmore-list" item-layout="horizontal" :data-source="configSearchResult"
          :pagination="pagination">
          <template #renderItem="{ item }">
            <a-list-item>
              <span class="text-[12px]">{{ item.name }}</span>
              <template #actions>
                <span @click="copyFeedback(item.name)" class="text-[12px] text-[#2db7f5]">复制</span>
              </template>
            </a-list-item>
          </template>
        </a-list>
      </div>
      <div class="w-[73%] h-[500px] overflow-auto">
        <ContentEditor :theme=true :content="contractTemplateExample" @updatecontent="updateContent">
        </ContentEditor>
      </div>
    </div>
  </a-modal>
  <!-- 确认添加模板弹窗 -->
  <a-modal title="保存模板" v-model:visible="showBeforeConfirmModal" :confirm-loading="confirmLoading"
    @ok="confirContractOK">
    <div class="p-3">
      <a-form labelAlign="left" :model="addNewTemplateForm">
        <a-form-item label="模板名称">
          <a-input v-model:value="addNewTemplateForm.templateName" placeholder="输入模板名称"></a-input>
        </a-form-item>
        <a-form-item label="适用范围">
          <a-select v-model:value="addNewTemplateForm.department"
            :options="[{ label: '科技园', value: 1 }, { label: '招商策划', value: 2 }, { label: '运营管理部', value: 3 }]"
            placeholder="请选择所属部门">
            <a-select-option value="1">科技园</a-select-option>
            <a-select-option value="2">招商策划</a-select-option>
            <a-select-option value="3">运营管理部</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="接收邮箱">
          <a-input v-model:value="addNewTemplateForm.email" placeholder="输入邮箱"></a-input>
        </a-form-item>
        <a-form-item label="模板认证">
          <a-select v-model:value="addNewTemplateForm.authUser" placeholder="请选择认证主体">
            <a-select-option value="option1">
              <div class="flex flex-col justify-between items-start">
                <div class="w-[100%] h-[50px] flex justify-start items-center">
                  <div>
                    <a-tag color="#2db7f5">个人认证</a-tag>
                  </div>
                  <div>申宏春</div>
                  <div class="text-[12px] text-[#ffa836] ml-2">由“e签宝”提供法律认证”</div>
                </div>
                <div class="flex justify-start items-center text-[12px]">
                  <span>经办人身份信息：</span>
                  <span>身份证：370782199901011234</span>
                </div>
              </div>
            </a-select-option>
            <a-select-option value="option2">
              <div class="flex flex-col justify-between items-start">
                <div class="w-[100%] h-[50px] flex justify-start items-center">
                  <div>
                    <a-tag color="#2db7f5">企业认证</a-tag>
                  </div>
                  <div>武汉东湖高新光电有限公司</div>
                  <div class="text-[12px] text-[#ffa836] ml-2">由“e签宝”提供法律认证”</div>
                </div>
                <div class="flex justify-start items-center text-[12px]">
                  <span>统一社会信用代码名：</span>
                  <span>SAJHJH321354SG435H</span>
                </div>
                <div class="flex justify-start items-center text-[12px] mt-3">
                  <span>法人姓名：</span>
                  <span>李江涛</span>
                </div>
              </div>
            </a-select-option>
            <a-select-option value="option3">
              <div class="flex flex-col justify-between items-start">
                <div class="w-[100%] h-[50px] flex justify-start items-center">
                  <div>
                    <a-tag color="#2db7f5">企业认证</a-tag>
                  </div>
                  <div>武汉光谷东新精准医疗产业发展有限公司</div>
                  <div class="text-[12px] text-[#ffa836] ml-2">由“e签宝”提供法律认证”</div>
                </div>
                <div class="flex justify-start items-center text-[12px]">
                  <span>统一社会信用代码名：</span>
                  <span>SAJKJ4645421354SG435H</span>
                </div>
                <div class="flex justify-start items-center text-[12px] mt-3">
                  <span>法人姓名：</span>
                  <span>石玉全</span>
                </div>
              </div>
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </div>

  </a-modal>
  <!-- 预览合同弹窗 -->
  <a-modal v-model:visible="showPreviewModal" width="1000px" title="预览合同" @ok="previewContractOK">
    <ContentEditor v-if="!loading" :theme=false :content="previewContractContent" @updatecontent="updateContent">
    </ContentEditor>
  </a-modal>
</template>
<style scoped></style>