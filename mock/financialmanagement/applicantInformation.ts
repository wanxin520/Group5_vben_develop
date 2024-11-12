import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';
function applicantInformationList() {
  return {
    applicantInformationData: {
      DeliveryEmail: '交付邮箱',
      Email: '1378024344@qq.com',

      DeliveryMobileNumber: '交付手机号',
      Number: '222224',

      ApplicationDate: '申请日期',
      Date: '2003.01.11',
    },
  };
}
export default [
  {
    url: '/basic-api/applicantInformation',
    timeout: 1000,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        //审核管理
        applicantInformationData: {
          ...applicantInformationList(),
        },
      });
      // 存在异常
      // return resultError('出现了错误');
    },
  },
] as MockMethod[];
