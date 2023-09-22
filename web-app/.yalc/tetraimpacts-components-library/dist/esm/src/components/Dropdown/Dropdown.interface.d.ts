interface DropdownProps {
    name?: string;
    onClick?: () => void;
    primary?: boolean;
    disabled?: boolean;
    isMulti?: true | undefined;
    text: string;
    placeholder?: string;
    isLoading?: boolean;
    isClearable?: true | undefined;
    isRtl?: true | undefined;
    isSearchable?: true | undefined;
    options: TiOptions[];
    defaultValue?: TiOptions | readonly TiOptions[] | null;
    value?: TiOptions | readonly TiOptions[] | null;
    menuIsOpen?: boolean;
    setValue?: (value: readonly TiOptions[] | null) => void;
    placeholderOut?: boolean;
    closeMenuOnSelect?: boolean;
    renderSelected?: boolean;
}
interface TiOptions {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}
export { TiOptions };
export default DropdownProps;
