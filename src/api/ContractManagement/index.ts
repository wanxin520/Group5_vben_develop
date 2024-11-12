import { defHttp } from '/@/utils/http/axios';


export function getContractData() {
  return defHttp.get({ url: '/contractmanage' });
}