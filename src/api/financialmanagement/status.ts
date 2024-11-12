import { defHttp } from '/@/utils/http/axios';

export function getstatusList() {
  return defHttp.get({ url: '/status' });
}
