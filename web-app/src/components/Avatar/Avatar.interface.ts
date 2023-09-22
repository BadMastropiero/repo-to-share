interface Filter {
  primaryColor: string;
  secondaryColor: string;
}

export interface AvatarProps {
  primary?: boolean;
  disabled?: boolean;
  width?: string;
  height?: string;
  customColor?: string;
  backgroundFilter?: Filter;
  onClick?: () => void;
}
