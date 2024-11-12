import { defHttp } from '/@/utils/http/axios';

export function getFinancialManagement() {
  return defHttp.get({ url: '/financialmanagement' });
}
