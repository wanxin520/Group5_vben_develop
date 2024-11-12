import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

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
function roomCommission() {
  return {
    room: [
      {
        'key|+1': 1,
        peoplename: '黄哈哈-13577778888',
        peopleJob: '招商专员',
        roomname: '武汉市洪山区万科1期1栋1401',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '5000',
        PaidCommissionAmount: '0',
        LatestDistributionmony: '5000',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': 2,
        peoplename: '赵哈哈-13577779999',
        peopleJob: '招商专员',
        roomname: '武汉市洪山区万科1期1栋1402',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '10000',
        PaidCommissionAmount: '0',
        LatestDistributionmony: '5000',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': 3,
        peoplename: '王哈哈-13577771111',
        peopleJob: '招商经理',
        roomname: '武汉市洪山区万科1期1栋1402',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '5000',
        PaidCommissionAmount: '0',
        LatestDistributionmony: '2500',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': 4,
        peoplename: '李哈哈-13577772222',
        peopleJob: '招商主管',
        roomname: '武汉市洪山区万科1期1栋14033',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '2500',
        PaidCommissionAmount: '0',
        LatestDistributionmony: '2500',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        'key|+1': 5,
        peoplename: '李哈哈-13577773333',
        peopleJob: '招商主管',
        roomname: '武汉市洪山区万科1期1栋1404',
        contracttime: '2023-01-01~2023-12-31',
        TotalCommissionAmount: '2500',
        PaidCommissionAmount: '0',
        LatestDistributionmony: '2500',
        LatestDistributionTime: '2023-02-01 11:11',
      },
      {
        peoplename: '总计',
        peopleJob: '-',
        roomname: '-',
        contracttime: '-',
        TotalCommissionAmount: '25000',
        PaidCommissionAmount: '0',
        LatestDistributionmony: '17500',
        LatestDistributionTime: '-',
      },
    ],
  };
}

function paymentListData() {
  return {
    table: [
      {
        standards: '全民营销',
        industry: '行业内',
        types: '新签',
        times: '<1年',
      },
      {
        standards: '自主招商',
        industry: '行业内',
        types: '新签',
        times: '1年≤X2年',
      },
      {
        standards: '自主招商',
        industry: '行业外',
        types: '新签',
        times: '2年≤X3年',
      },
      {
        standards: '产业合作部网络渠道',
        industry: '行业内',
        types: '新签',
        times: '≥3年',
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
        room: {
          ...roomCommission(),
        },
        table: {
          ...paymentListData(),
        },
      });
      // 存在异常
      // return resultError('出现了错误');
    },
  },
] as MockMethod[];
