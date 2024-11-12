import { defHttp } from '/@/utils/http/axios';
export function getpurchaseInformation() {
  return defHttp.get({ url: '/purchaseInformation' });
}
