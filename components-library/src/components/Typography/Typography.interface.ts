import {BaseProps} from '../Base.interface';

export interface TypographyProps extends BaseProps<HTMLDivElement> {
  variant?: string;
  children: React.ReactNode | React.ReactNode[];
  fontFamily?: string;
  colorPreset?: 'primary' | 'error' | 'secondary' | 'link' | 'disable' | null;
  customColor?: string;
  preset?: 'title' | 'subtitle' | 'content' | 'link' | 'button' | 'label' | null;
  customPreset?: string;
  fontSize?: string;
  lineHeight?: string;
  fontStyle?: string;
  fontWeight?: string;
  textAlign?: string;
  textTransform?: string;
  letterSpacing?: string;
  textDecorationLine?: string;
  gradient?: string;
  colors?: {
    primary: string;
    error: string;
    disable: string;
    link: string;
    secondary: string;
  };
  margin?: string;
  padding?: string;
  lineNumbers?: number;
}
