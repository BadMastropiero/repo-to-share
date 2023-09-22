import React from 'react';
import {IconBase} from 'tetraimpacts-components-library';

// Interfaces
import {AvatarProps} from './Avatar.interface';

function Avatar({
  primary,
  customColor: color,
  disabled,
  width = '31px',
  height = '31px',
  backgroundFilter,
  onClick,
}: AvatarProps) {
  return (
    <IconBase
      className="ticons-arrow_down"
      style={{
        filter: backgroundFilter
          ? `drop-shadow(0px 0px 10px ${
              primary ? backgroundFilter?.secondaryColor : backgroundFilter?.primaryColor
            })`
          : undefined,
      }}
      primary={primary}
      color={color}
      disabled={disabled}
      height={height} // "31px"
      width={width} // "31px"
      viewBox="0 0 31 31"
      onClick={onClick}
    >
      <path d="M5.97507 23.15C7.25007 22.175 8.67507 21.4062 10.2501 20.8438C11.8251 20.2812 13.4751 20 15.2001 20C16.9251 20 18.5751 20.2812 20.1501 20.8438C21.7251 21.4062 23.1501 22.175 24.4251 23.15C25.3001 22.125 25.9813 20.9625 26.4688 19.6625C26.9563 18.3625 27.2001 16.975 27.2001 15.5C27.2001 12.175 26.0313 9.34375 23.6938 7.00625C21.3563 4.66875 18.5251 3.5 15.2001 3.5C11.8751 3.5 9.04382 4.66875 6.70632 7.00625C4.36882 9.34375 3.20007 12.175 3.20007 15.5C3.20007 16.975 3.44382 18.3625 3.93132 19.6625C4.41882 20.9625 5.10007 22.125 5.97507 23.15ZM15.2001 17C13.7251 17 12.4813 16.4938 11.4688 15.4813C10.4563 14.4688 9.95007 13.225 9.95007 11.75C9.95007 10.275 10.4563 9.03125 11.4688 8.01875C12.4813 7.00625 13.7251 6.5 15.2001 6.5C16.6751 6.5 17.9188 7.00625 18.9313 8.01875C19.9438 9.03125 20.4501 10.275 20.4501 11.75C20.4501 13.225 19.9438 14.4688 18.9313 15.4813C17.9188 16.4938 16.6751 17 15.2001 17ZM15.2001 30.5C13.1251 30.5 11.1751 30.1062 9.35007 29.3187C7.52507 28.5312 5.93757 27.4625 4.58757 26.1125C3.23757 24.7625 2.16882 23.175 1.38132 21.35C0.593823 19.525 0.200073 17.575 0.200073 15.5C0.200073 13.425 0.593823 11.475 1.38132 9.65C2.16882 7.825 3.23757 6.2375 4.58757 4.8875C5.93757 3.5375 7.52507 2.46875 9.35007 1.68125C11.1751 0.89375 13.1251 0.5 15.2001 0.5C17.2751 0.5 19.2251 0.89375 21.0501 1.68125C22.8751 2.46875 24.4626 3.5375 25.8126 4.8875C27.1626 6.2375 28.2313 7.825 29.0188 9.65C29.8063 11.475 30.2001 13.425 30.2001 15.5C30.2001 17.575 29.8063 19.525 29.0188 21.35C28.2313 23.175 27.1626 24.7625 25.8126 26.1125C24.4626 27.4625 22.8751 28.5312 21.0501 29.3187C19.2251 30.1062 17.2751 30.5 15.2001 30.5ZM15.2001 27.5C16.5251 27.5 17.7751 27.3063 18.9501 26.9188C20.1251 26.5313 21.2001 25.975 22.1751 25.25C21.2001 24.525 20.1251 23.9688 18.9501 23.5812C17.7751 23.1938 16.5251 23 15.2001 23C13.8751 23 12.6251 23.1938 11.4501 23.5812C10.2751 23.9688 9.20007 24.525 8.22507 25.25C9.20007 25.975 10.2751 26.5313 11.4501 26.9188C12.6251 27.3063 13.8751 27.5 15.2001 27.5ZM15.2001 14C15.8501 14 16.3876 13.7875 16.8126 13.3625C17.2376 12.9375 17.4501 12.4 17.4501 11.75C17.4501 11.1 17.2376 10.5625 16.8126 10.1375C16.3876 9.7125 15.8501 9.5 15.2001 9.5C14.5501 9.5 14.0126 9.7125 13.5876 10.1375C13.1626 10.5625 12.9501 11.1 12.9501 11.75C12.9501 12.4 13.1626 12.9375 13.5876 13.3625C14.0126 13.7875 14.5501 14 15.2001 14Z" />
    </IconBase>
  );
}

export default Avatar;
