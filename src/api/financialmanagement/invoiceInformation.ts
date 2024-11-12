import { defHttp } from '/@/utils/http/axios';

export function getinvoiceInformation() {
  return defHttp.get({ url: '/invoiceInformation' });
}
