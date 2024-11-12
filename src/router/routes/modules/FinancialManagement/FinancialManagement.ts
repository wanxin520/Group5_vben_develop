import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/financialmanagement',
  name: 'FinancialManagement',
  component: LAYOUT,
  redirect: '/financialmanagement/invoicerecords',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '财务管理',
  },
  children: [
    {
      path: 'invoiceservices',
      name: 'InvoiceServices',
      meta: {
        // affix: true,
        title: '发票服务',
        icon: 'ion:grid-outline',
      },
      children: [
        {
          path: 'invoicerecords',
          name: 'InvoiceRecords',
          component: () =>
            import(
              '../../../../views/FinancialManagement/InvoiceServices/invoice_records/Login/Login.vue'
            ),
          meta: {
            title: '开票记录',
          },
        },
      ],
    },
    // {
    //   path: 'workbench',
    //   name: 'Workbench',
    //   component: () => import('/@/views/dashboard/workbench/index.vue'),
    //   meta: {
    //     title: t('routes.dashboard.workbench'),
    //   },
    // },
  ],
};

export default dashboard;
