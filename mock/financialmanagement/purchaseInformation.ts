import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';
function purchaseInformationList() {
  return {
    purchaseInformationData: {
      BuyerType: '购买类型',
      personal: '个人',

      BuyerName: '购方名称',
      Name: '@cname()',

      BuyerTaxNumber: '购方税号',
      Number: '@integer(400000,500000)',

      PropertyAddress: '购方地址',
      ress: '-',

      BuyerPhoneNumber: '购方电话',
      PhoneNumber: '@integer(400000,500000)',

      BuyerBankName: '购方开户行名称',
      BankName: '-',

      BuyerBankAccountNumber: '购方开户行账号',
      BankAccountNumber: '@integer(400000,500000)',

      Note: '备注',
      Address: '@provice()@city()@county()@street()@integer(100,999)',
      time: '@datetime()',
      email: '@email()',
    },
  };
}

export default [
  {
    url: '/basic-api/purchaseInformation',
    timeout: 1000,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        //审核管理
        purchaseInformationData: {
          ...purchaseInformationList(),
        },
      });
      // 存在异常
      // return resultError('出现了错误');
    },
  },
] as MockMethod[];
