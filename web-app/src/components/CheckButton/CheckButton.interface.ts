export default interface CheckButtonProps {
  height?: string;
  width?: string;
  text?: string;
  checked: boolean;
  fontSize?: string;
  onChange: () => void;
}
