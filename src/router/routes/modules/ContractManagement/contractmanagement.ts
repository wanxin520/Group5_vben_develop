import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/contractmanagement',
  name: 'ContractManagement',
  component: LAYOUT,
  // redirect: '/multiple/multiple1',
  meta: {
    orderNo: 10,
    icon: 'octicon:file-directory-open-fill-16',
    title: "合约管理",
  },
  children: [
      {
      path: 'tenantcontract',
      name: 'TenantContract',
      meta: {
        // affix: true,
        icon: 'clarity:contract-solid',
        title: "租客合同",
      },
    },
    {
      path: 'contractconfigration',
      name: 'ContractConfigration',
      component: () => import('/@/views/ContractManagement/contract_configuration/Index.vue'),
      meta: {
        // affix: true,
        icon: 'ri:contract-fill',
        title: "合同配置",
      },
    },
    {
      path: 'reservationmanagement',
      name: 'ReservationManagement',
      component: () => import('/@/views/ContractManagement/reservation_management/Index.vue'),
      meta: {
        // affix: true,
        icon: 'fluent-mdl2:reservation-orders',
        title: "预约管理",
      },
    },
  ]
};

export default dashboard;
