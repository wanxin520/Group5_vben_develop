import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';
function createAuditList() {
  return {
    auditManagement: {
      FullAmount: '@integer(1,100).00', //全额（不含税）
      TaxAmount: '@integer(1,100)', //税额
      TotalPriceIncludingTax: '@integer(1,100)', // 价税合计
    },
  };
}
function invoiceRecordsList() {
  return {
    managementData: [
      {
        id: '1',
        status: 70001,
        ApplicationEntryPoin: '',
        BuyerType: '',
        BuyerName: '',
        TaxIDNumber: '',
      },
      {
        id: '2',
        status: 70002,
        ApplicationEntryPoin: '',
        BuyerType: '',
        BuyerName: '',
        TaxIDNumber: '',
      },
      {
        id: '3',
        status: 70003,
        ApplicationEntryPoin: '',
        BuyerType: '',
        BuyerName: '',
        TaxIDNumber: '',
      },
    ],
  };
}
export default [
  {
    url: '/basic-api/financialmanagement',
    timeout: 1000,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        //审核管理
        auditManagement: {
          ...createAuditList(),
        },
        managementData: {
          ...invoiceRecordsList(),
        },
      });
      // 存在异常
      // return resultError('出现了错误');
    },
  },
] as MockMethod[];
