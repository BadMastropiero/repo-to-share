// Interfaces
import SwitchButtonProps from './SwitchButton.inteface';

// Styles
import StyledSwitchButton from './SwitchButton.styles';

export default function SwitchButton({
  options,
  selected,
  setSelected,
  indexBy = 'id',
  style,
  primary,
}: SwitchButtonProps) {
  const indexToSelect =
    (options.findIndex(option => option[indexBy] === selected[indexBy]) + 1) % options.length;

  return (
    <StyledSwitchButton
      primary={primary}
      style={style}
      text={options[indexToSelect].label}
      onClick={() => {
        setSelected(options[indexToSelect]);
      }}
    />
  );
}
