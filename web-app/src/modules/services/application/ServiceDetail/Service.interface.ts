import CIService from 'modules/services/domain/types';

export default interface IServiceDetail {
  contentImgUrl: string;
  service: CIService;
  showCalendlyWidget?: boolean;
  setShowCalendlyWidget?: (value: boolean) => void;
}
