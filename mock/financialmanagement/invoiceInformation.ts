import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';
function invoiceInformationList() {
  return {
    invoiceInformationData: [
      {
        id: 1,
        InvoiceDate: '2003.01.11',
        InvoiceType: '',
        InvoiceCode: '',
        InvoiceNumber: '',
        Issuer: '',
        TotalTax: '',
        ViewDownload: '',
      },
    ],
  };
}

export default [
  {
    url: '/basic-api/invoiceInformation',
    timeout: 1000,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        //审核管理
        invoiceInformationData: {
          ...invoiceInformationList(),
        },
      });
      // 存在异常
      // return resultError('出现了错误');
    },
  },
] as MockMethod[];
