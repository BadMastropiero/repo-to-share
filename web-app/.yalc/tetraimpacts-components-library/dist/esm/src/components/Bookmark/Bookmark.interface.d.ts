/// <reference types="react" />
import { BaseProps } from '../Base.interface';
import { CustomIconProps } from '../Icon/Icon.interface';
export default interface BookmarkProps extends BaseProps<HTMLDivElement> {
    text?: string;
    primary?: boolean;
    alwaysShowRibbon?: 'left' | 'right' | 'both';
    afterIcon?: React.FC<CustomIconProps>;
    beforeIcon?: React.FC<CustomIconProps>;
}
