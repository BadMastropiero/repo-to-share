import React from 'react';
import { GroupBase } from 'react-select';
import DropdownProps from './Dropdown.interface';
/**
 * The following snippet is required in order to pass our custom props
 * to the select returned by our Dropdown, as described in
 * [this comment](https://github.com/JedWatson/react-select/issues/4804#issuecomment-927223471)
 */
declare module 'react-select/dist/declarations/src/Select' {
    interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
        /**
         * Here we declare our custom props, which will be passed to the select
         * @param primary - Set the theme type.
         * @param optionWithCheckBox - If checkboxes are shown in options that populate the list.
         */
        primary?: boolean;
        optionWithCheckBox?: boolean;
    }
}
declare const Dropdown: React.ComponentType<DropdownProps>;
export default Dropdown;
