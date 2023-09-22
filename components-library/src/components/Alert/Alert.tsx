import React from 'react';
import {Button} from '../Button';

import {Close} from '../Icon';
import {Typography} from '../Typography';

// Interfaces
import {AlertProps} from './Alert.interface';

// Styles
import StyledAlert, {
  AlertButtonContainer,
  AlertCloseButton,
  AlertContainer,
  AlertHeader,
} from './Alert.styles';

const Alert: React.FC<AlertProps> = ({
  title = 'Message Type',
  description = 'Message description',
  acceptText = 'ACCEPT',
  rejectText = 'CANCEL',
  onAccept,
  onReject,
  noCloseButton = false,
  isOpen = false,
  setIsOpen,
  backdropBgColor,
  primary = false,
}) => (
  <StyledAlert
    primary={primary}
    isOpen={isOpen}
    className="ti-alert"
    noDismissOnEsc
    backdropBgColor={backdropBgColor}
    setIsOpen={setIsOpen}
  >
    <AlertContainer className="ti-alert-container">
      <AlertHeader className="ti-alert-header">
        <Typography
          fontWeight="700"
          fontSize="16px"
          height="19px"
          lineHeight="19px"
          fontFamily="Roboto Flex"
          fontStyle="normal"
          colorPreset={primary ? 'secondary' : 'primary'}
          padding="0px 0px 0px 1px" // * Needed to correct typography left border shadowing first letter
        >
          {title}
        </Typography>
        {noCloseButton || (
          <AlertCloseButton
            className="ti-alert-close-btn"
            presetSize="small"
            afterIcon={Close}
            rounded
            onClick={onReject}
            primary={primary}
          />
        )}
      </AlertHeader>
      <Typography
        fontWeight="500"
        fontSize="12px"
        lineHeight="20.4px"
        fontFamily="Roboto Flex"
        fontStyle="normal"
        colorPreset={primary ? 'secondary' : 'disable'}
      >
        {description}
      </Typography>
      <AlertButtonContainer className="ti-alert-buttons-container">
        <Button
          className="ti-alert-reject-btn"
          presetSize="small"
          text={rejectText}
          rounded
          onClick={onReject}
          primary={!primary}
          presetType="text"
        />
        <Button
          className="ti-alert-accept-btn"
          presetSize="small"
          text={acceptText}
          rounded
          onClick={onAccept}
          primary={primary}
        />
      </AlertButtonContainer>
    </AlertContainer>
  </StyledAlert>
);

export default Alert;
