interface Filter {
  primaryColor: string;
  secondaryColor: string;
}

export interface LogoProps {
  primary?: boolean;
  disabled?: boolean;
  width?: string;
  height?: string;
  customColor?: string;
  backgroundFilter?: Filter;
}
