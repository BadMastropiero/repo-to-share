export interface Objectives {
  text: string;
  checked: boolean;
  onChange?: () => void;
}

export default interface ContactUsProps {
  title: string;
  animated?: boolean;
  lottie?: any;
  imageUrl?: string;
  objectives?: Objectives[];
  handleSendButton?: () => boolean;
  setLoading?: (loading: boolean) => void;
}
