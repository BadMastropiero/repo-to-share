interface Filter {
  primaryColor: string;
  secondaryColor: string;
}

export default interface UserAuthControlProps {
  isMobileMScreen?: boolean;
  isDrawerVisible?: boolean;
  primary?: boolean;
  defaultAvatarBgFilter?: Filter;
}
