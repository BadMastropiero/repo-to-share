import {useEffect, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Typography} from '../Typography';
import {Button} from '../Button';

import Modal from './Modal';
import CarWrapped, {CardContent, CardControls, CardHeader} from '../Card';
import {Icon, Share} from '../Icon';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Base: ComponentStory<typeof Modal> = args => {
  const {isOpen, closeOnBackdropClick, style, backdropBgColor, noDismissOnEsc} = args;

  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Button onClick={handleOpen} presetSize="small" text="Open Modal" primary rounded />
      <Modal
        id="modal-with-card"
        isOpen={isVisible}
        setIsOpen={setIsVisible}
        closeOnBackdropClick={closeOnBackdropClick}
        style={style}
        backdropBgColor={backdropBgColor}
        noDismissOnEsc={noDismissOnEsc}
      >
        <CarWrapped width="420px" variant="service">
          <CardHeader>
            <Typography
              variant="h1"
              customPreset="serviceTitle"
              fontWeight="700"
              gradient="linear-gradient(45deg, #00EB87, #0066A6)"
              fontFamily="Roboto Flex"
            >
              Card inside a modal
            </Typography>
          </CardHeader>
          <CardContent>
            <Typography colorPreset="primary" preset="content">
              <ul>
                <li>Modals can accept all kind of children components.</li>
                <li>You can dismiss this modal by pressing ESC.</li>
                <li>For styling the modal (and backdrop), modify its style prop.</li>
              </ul>
            </Typography>
          </CardContent>
          <CardControls>
            <div style={{display: 'flex', width: '100%', alignItems: 'center', gap: '5px'}}>
              <Icon icon={Share} primary disabled height="16px" width="16px" />
              <Typography
                colorPreset="disable"
                fontSize="12px"
                lineHeight="24px"
                preset="content"
                aria-label="likes"
              >
                9999,9999
              </Typography>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'end'}}>
              <Button onClick={handleClose} presetSize="small" rounded text="Close" />
            </div>
          </CardControls>
        </CarWrapped>
      </Modal>
    </>
  );
};

Base.args = {
  isOpen: false,
  closeOnBackdropClick: false,
  style: undefined,
  backdropBgColor: undefined,
  noDismissOnEsc: false,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
