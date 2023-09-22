import React from 'react';
import IconBase from '../../IconBase';
import {CustomIconProps} from '../../Icon.interface';

const Twitter: React.FC<CustomIconProps> = ({
  primary,
  customColor: color,
  disabled,
  width = '24px',
  height = '24px',
}) => (
  <IconBase
    className="ticons-twitter"
    primary={primary}
    color={color}
    disabled={disabled}
    height={height} // "24px"
    width={width} // "24px"
    viewBox="0 0 24 24"
  >
    <path d="M19.2159 3.89237C19.7458 3.72746 20.2572 3.493 20.7405 3.19259C21.2094 2.90114 21.8099 2.93098 22.2476 3.2675C22.6853 3.60401 22.8684 4.17665 22.7073 4.7047C22.6908 4.75863 22.6736 4.81225 22.6556 4.86555C22.7841 4.9387 22.9019 5.03427 23.0027 5.15091C23.3874 5.59633 23.4323 6.2422 23.1127 6.7365C22.6029 7.52491 21.9861 8.23936 21.2848 8.8551C21.2521 15.0174 16.7369 22.3249 8.28799 22.3249C5.79148 22.3249 3.35831 21.5845 1.26074 20.1743C0.755674 19.8348 0.546861 19.1949 0.754455 18.6228C0.962049 18.0507 1.53266 17.6936 2.13794 17.7569C2.43554 17.7881 2.71278 17.8083 2.97599 17.8083C3.63735 17.8083 4.29108 17.7092 4.9187 17.5162C4.01611 16.8246 3.32456 15.8472 2.97312 14.7002C2.89248 14.437 2.89702 14.1603 2.97856 13.9065C2.03437 12.8823 1.47499 11.5022 1.47499 10.0264V9.97624C1.47499 9.60672 1.62887 9.25915 1.89134 9.01184C1.30117 7.46432 1.3856 5.67 2.23369 4.14324C2.44981 3.75418 2.84682 3.4996 3.29057 3.46554C3.73432 3.43147 4.16553 3.62246 4.4385 3.97398C5.97037 5.94663 8.1026 7.27109 10.4315 7.75708C10.5552 6.43417 11.1322 5.17403 12.0942 4.22765C14.0878 2.26307 17.1335 2.17554 19.2159 3.89237ZM4.70299 11.8364C5.10927 12.3968 5.69918 12.7971 6.37282 12.941C6.96692 13.0679 7.39859 13.5826 7.42015 14.1897C7.44001 14.749 7.10718 15.2547 6.59842 15.4628C7.03804 15.7775 7.55845 15.9569 8.09732 15.9672C8.65205 15.9778 9.14143 16.3329 9.32356 16.857C9.5057 17.3811 9.342 17.9632 8.91339 18.3155C8.29503 18.8238 7.62327 19.2471 6.91417 19.5794C7.36765 19.6429 7.82648 19.6749 8.28799 19.6749C14.8962 19.6749 18.635 13.9447 18.635 8.78766C18.635 8.59873 18.6348 8.44336 18.6282 8.29273C18.6189 8.07754 18.6621 7.86685 18.7503 7.67704C18.5918 7.53358 18.4666 7.35046 18.3912 7.13798C18.3259 6.95379 18.3036 6.7631 18.3201 6.57796C18.1415 6.50316 17.9786 6.38895 17.845 6.23989C16.7965 5.06935 15.0699 5.01561 13.9541 6.11536L13.953 6.11644C13.222 6.83525 12.8955 7.93048 13.1325 8.98165C13.2238 9.38654 13.1201 9.81082 12.8524 10.1279C12.5846 10.4451 12.1837 10.6184 11.7693 10.5963C8.98405 10.4474 6.34279 9.3664 4.22216 7.56282C4.37168 8.30641 4.78733 8.98444 5.41975 9.42362C5.90064 9.75757 6.10536 10.3675 5.92329 10.924C5.7488 11.4573 5.2587 11.8202 4.70299 11.8364Z" />
  </IconBase>
);

export default Twitter;
