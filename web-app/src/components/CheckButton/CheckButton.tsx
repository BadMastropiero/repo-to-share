import {Typography, Checkbox} from 'tetraimpacts-components-library';
import CheckButtonProps from './CheckButton.interface';
import CheckItem from './CheckButton.styles';

export default function CheckButton({
  height,
  width,
  text,
  checked,
  fontSize,
  onChange,
}: CheckButtonProps) {
  return (
    <CheckItem>
      <Checkbox
        checked={checked}
        onChange={onChange}
        height={height}
        width={width}
        aria-label={text}
      />
      <Typography
        colorPreset="secondary"
        fontFamily="Roboto Flex"
        fontStyle="normal"
        fontSize={fontSize || '15px'}
        fontWeight="400"
        lineHeight="17.58px"
      >
        {text}
      </Typography>
    </CheckItem>
  );
}
