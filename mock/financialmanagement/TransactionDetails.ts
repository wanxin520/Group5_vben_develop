import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';
function transactionDetailsList() {
  return {
    transactionDetailsData: {
      PropertyAddress: '房源地址', //房源地址
      Address: '@provice()@city()@county()@street()@integer(100,999)',

      CurrentStatus: '当前状态',
      Normal: '正常',

      PayerInformation: '付款人信息',
      PayerName: '@cname()',
      PayerPhoneNumber: '@phone()',

      ReceivedAmount: '收款金额',
      AmountNumber: '@float(1000,5000,2,2)',
      AmoutCurrency: '7179.00',

      ExpenseSummary: '费用摘要',
      HouseRent: '房屋租金',
      HouseMortgage: '房屋抵押',
      ActualReceiptTime: '实际收款时间',
      Time: '2022-01-01 12:00:00',
    },
  };
}

function paymentdetailsList() {
  return {
    paymentdtailsData: {},
  };
}
export default [
  {
    url: '/basic-api/transactionDetails',
    timeout: 1000,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        //审核管理
        transactionDetailsData: {
          ...transactionDetailsList(),
        },
        paymentdetailsData: {
          ...paymentdetailsList(),
        },
      });
      // 存在异常
      // return resultError('出现了错误');
    },
  },
] as MockMethod[];
