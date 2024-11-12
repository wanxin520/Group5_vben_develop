import { defHttp } from '/@/utils/http/axios';
export function getinvoicedProductInformation() {
  return defHttp.get({ url: '/invoicedProductInformation' });
}
