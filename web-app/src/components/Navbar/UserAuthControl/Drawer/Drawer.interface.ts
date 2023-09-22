import {CustomIconProps} from 'tetraimpacts-components-library/dist/cjs/src/components/Icon/Icon.interface';
import {User} from 'firebase/auth';

interface SocialNetwork {
  name: string;
  link: string;
  icon: React.FC<CustomIconProps>;
}

export default interface IDrawer {
  showDrawer: boolean;
  visible?: boolean;
  primary?: boolean;
  user?: User | null;
  phoneNumber?: string;
  email?: string;
  socialNetworks?: SocialNetwork[];
  setModalOpen: (value: boolean) => void;
  setShowDrawer: (value: boolean) => void;
}
