import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';
// import { Faker, zh_CN } from '@faker-js/faker';

// const faker = new Faker({
//   locale: [zh_CN],
// });

function createAuditList() {
  return {
    result: [
      {
        'key|+1': 1,
        companyName: '@pick(["xxx有限公司", "yyyy有限公司","zzz有限公司"])',
        rentalStandard: '@pick(["自主招商", "全民管控"])',
        industry: '@pick(["xxx行业", "yyy行业"])',
        roomNumber: '@county(true)',
        signTime: '@datetime',
        signArea: '@integer(30, 100)㎡',
        signPrice: '@integer(50, 100)元/㎡',
        contractStartTime: '@date("yyyy-MM-dd")',
        contractEndTime: '@date("yyyy-MM-dd")',
        firstMonthRent: '@integer(2000, 5000)元/月',
        totalRent: '@integer(5000, 15000)元',
        actualReceiptTime: '@datetime',
        recruiter: '@cname',
        totalReleasedAmount: '@integer(0, 25000)元',

        newcline: '@integer(5000, 100000)元',
        oldcline: '@integer(5000, 100000)元',
      },
      {
        'key|+1': 2,
        companyName: '@pick(["xxx有限公司", "yyyy有限公司","zzz有限公司"])',
        rentalStandard: '@pick(["自主招商", "全民管控"])',
        industry: '@pick(["xxx行业", "yyy行业"])',
        roomNumber: '@county(true)',
        signTime: '@datetime',
        signArea: '@integer(30, 100)㎡',
        signPrice: '@integer(50, 100)元/㎡',
        contractStartTime: '@date("yyyy-MM-dd")',
        contractEndTime: '@date("yyyy-MM-dd")',
        firstMonthRent: '@integer(2000, 5000)元/月',
        totalRent: '@integer(5000, 15000)元',
        actualReceiptTime: '@datetime',
        recruiter: '@cname',
        totalReleasedAmount: '@integer(0, 25000)元',

        newcline: '@integer(5000, 100000)元',
        oldcline: '@integer(5000, 100000)元',
      },
      {
        'key|+1': 3,
        companyName: '@pick(["xxx有限公司", "yyyy有限公司","zzz有限公司"])',
        rentalStandard: '@pick(["自主招商", "全民管控"])',
        industry: '@pick(["xxx行业", "yyy行业"])',
        roomNumber: '@county(true)',
        signTime: '@datetime',
        signArea: '@integer(30, 100)㎡',
        signPrice: '@integer(50, 100)元/㎡',
        contractStartTime: '@date("yyyy-MM-dd")',
        contractEndTime: '@date("yyyy-MM-dd")',
        firstMonthRent: '@integer(2000, 5000)元/月',
        totalRent: '@integer(5000, 15000)元',
        actualReceiptTime: '@datetime',
        recruiter: '@cname',
        totalReleasedAmount: '@integer(0, 25000)元',
        newcline: '@integer(5000, 100000)元',
        oldcline: '@integer(5000, 100000)元',
      },
      {
        'key|+1': '总计',
        companyName: '-',
        rentalStandard: '-',
        industry: '-',
        roomNumber: '-',
        signTime: '-',
        signArea: '@integer(30, 100)㎡',
        signPrice: '-',
        contractStartTime: '-',
        contractEndTime: '-',
        firstMonthRent: '@integer(2000, 5000)元/月',
        totalRent: '@integer(5000, 15000)元',
        actualReceiptTime: '-',
        recruiter: '@cname',
        totalReleasedAmount: '@integer(0, 25000)元',
        newcline: '@integer(5000, 100000)元',
        oldcline: '@integer(5000, 100000)元',
      },
    ],
  };
}

export default [
  {
    url: '/basic-api/PerformanceManagement',
    timeout: 1000,
    method: 'get',
    response() {
      // 没有异常
      return resultSuccess({
        //审核管理
        result: {
          ...createAuditList(),
        },
      });
      // 存在异常
      // return resultError('出现了错误');
    },
  },
] as MockMethod[];
