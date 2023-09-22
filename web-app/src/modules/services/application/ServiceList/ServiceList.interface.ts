import CIService from 'modules/services/domain/types';

export default interface IServiceList {
  title?: string;
  summary?: string;
  services?: CIService[];
}
