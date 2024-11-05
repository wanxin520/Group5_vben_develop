import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/performanceManagement',
  name: 'PerformanceManagement',
  component: LAYOUT,
  // redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '业绩管理',
  },
  children: [
    {
      path: 'commission',
      name: 'Commission',
      component: () => import('/@/views/PerformanceManagement/Commission/detailedPage/index.vue'),
      meta: {
        title: '业绩台账',
      },
    },
    {
      path: 'payment',
      name: 'Payment',
      component: () => import('/@/views/PerformanceManagement/Payment/index.vue'),
      meta: {
        title: '分佣配置',
      },
    },
    {
      path: 'record',
      name: 'Record',
      component: () => import('/@/views/PerformanceManagement/Record/index.vue'),
      meta: {
        title: '业绩审批',
      },
    },
    {
      path: 'summary',
      name: 'Summary',
      component: () => import('/@/views/PerformanceManagement/Summary/index.vue'),
      meta: {
        title: '成员角色权限配置',
      },
    },
  ],
};

export default dashboard;
