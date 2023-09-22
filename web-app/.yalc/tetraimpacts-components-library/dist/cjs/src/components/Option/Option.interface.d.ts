export interface OptionProps {
    onClick?: () => void;
    primary?: boolean;
    disabled?: boolean;
    text: string;
    selected: boolean;
    noCheckbox?: boolean;
}
