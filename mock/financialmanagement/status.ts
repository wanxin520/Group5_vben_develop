import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';
function propsdata() {
  return {
    // 这里是你的 mock 数据
    statusData: [
      {
        status: '待处理',
        operation: '当客户从小程序或者管家端的申请',
      },
      ,
      {
        status: '开票中',
        operation: '',
      },
      {
        status: '已开票',
        operation: '冲红 作废',
      },
      {
        status: '已作废',
        operation: '无操作',
      },
      {
        status: '已冲红',
        operation: '没有任何操作',
      },
    ],
  };
}

function invoicedetailsList() {
  return {
    invoicedetailsData: [
      {
        property_address: '武汉市东湖高新武汉软件新城1.1期E区A11栋-715室',
        CurrentStatus: '当前状态',
        Reversed: '已冲红',
        Applicant: '申请方',
        Name: '王',
        Phone: '139.....',
        ApplicationPlatform: '申请平台',
        TenantSide: '租客端',
        ApplicationDate: '申请日期',
        Data: '2003.01.11 15:09',
      },
    ],
  };
}

export default [
  {
    url: '/basic-api/status',
    timeout: 1000,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        //审核管理
        statusData: {
          ...propsdata(),
        },
        invoicedetailsData: {
          ...invoicedetailsList(),
        },
      });
      // 存在异常
      // return resultError('出现了错误');
    },
  },
] as MockMethod[];
