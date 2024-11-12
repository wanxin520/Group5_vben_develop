import { defHttp } from '/@/utils/http/axios';

export function getapplicantInformation() {
  return defHttp.get({ url: '/applicantInformation' });
}
