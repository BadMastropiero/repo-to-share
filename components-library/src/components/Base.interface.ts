import {AllHTMLAttributes} from 'react';

export type BaseProps<T> = AllHTMLAttributes<T> & {
  as?: undefined; // This is to avoid types error later(trying to assing `string` to `undefined`)
};
