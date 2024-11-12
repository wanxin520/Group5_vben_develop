import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';
function invoicedProductInformationList() {
  return {
    invoicedProductInformationData: [
      {
        ExpenseItemCommodityName: '房屋租金',
        SpecificationsandModel: '-',
        Unit: '-',
        Quantity: '-',
        UnitPrice: '-',
        BusinessTaxRate: '-',
        Amount: '-',
        TaxAmount: '-',
        TotalAmountIncludingTax: '-',
        CorrelatedTransactions: '查看',
      },
    ],
  };
}

export default [
  {
    url: '/basic-api/invoicedProductInformation',
    timeout: 1000,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        //审核管理
        invoicedProductInformationData: {
          ...invoicedProductInformationList(),
        },
      });
      // 存在异常
      // return resultError('出现了错误');
    },
  },
] as MockMethod[];
