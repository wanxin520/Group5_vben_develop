import { defHttp } from '/@/utils/http/axios';

export function gettransactionDetailsList() {
  return defHttp.get({ url: '/transactionDetails' });
}
