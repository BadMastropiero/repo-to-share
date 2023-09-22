import React, {FormEvent, useReducer, useState} from 'react';
import axios from 'axios';

// Hooks
import {useTranslation} from 'next-i18next';

// Components
import CheckButton from 'components/CheckButton/CheckButton';
import Image from 'next/image';
import {
  Input,
  Typography,
  Button,
  ArrowRight,
  devices,
  toast,
  useMediaQuery,
} from 'tetraimpacts-components-library';

// Interfaces
import ContactUsProps, {Objectives} from './ContactUS.interface';

// Import styles
import {
  StyledContactUs,
  ContactFormContainer,
  TitleContainer,
  CheckContainer,
  ContactInfoForm,
  ButtonContainer,
  ImageContainer,
  CheckWrapper,
} from './ContactUS.styles';

const initialCheckboxOptionsState: Objectives[] = [
  {
    text: 'contact-us-check-build',
    checked: false,
  },
  {
    text: 'contact-us-check-business-plan',
    checked: false,
  },
  {
    text: 'contact-us-check-scale',
    checked: false,
  },
  {
    text: 'contact-us-check-agile',
    checked: false,
  },
  {
    text: 'contact-us-check-speed',
    checked: false,
  },
  {
    text: 'other-text',
    checked: false,
  },
];

const contactUsReducer = (state: Objectives[], action: {type: string; payload?: any}) => {
  switch (action.type) {
    case 'toggleCheckButton':
      return state.map(item => {
        if (item.text === action.payload) return {...item, checked: !item.checked};
        return item;
      });
    case 'resetCheckedOptions':
      return state.map(item => ({...item, checked: false}));
    // TODO: Create a reset action type
    default:
      return state;
  }
};

function ContactUsSection({
  title,
  imageUrl,
  objectives,
  handleSendButton,
  setLoading,
}: ContactUsProps) {
  const {t} = useTranslation();

  const [isTableScreen] = useMediaQuery(devices.tablet);
  const [checkboxList, dispatch] = useReducer(
    contactUsReducer,
    objectives || initialCheckboxOptionsState
  );

  const [sendingEmail, setSendingEmail] = useState(false);

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [message, setMessage] = useState("");
  const [project, setProject] = useState('');
  const [phone, setPhone] = useState('');
  const [hearFrom, setHearFrom] = useState('');

  const cleanForm = () => {
    setName('');
    setEmail('');
    // setMessage("");
    setProject('');
    setPhone('');
    setHearFrom('');
    dispatch({
      type: 'resetCheckedOptions',
    });
  };

  const handleCheckToggle = (text: string) => {
    dispatch({
      type: 'toggleCheckButton',
      payload: text,
    });
  };

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (handleSendButton && !handleSendButton()) return;
    if (setLoading) setLoading(true);
    setSendingEmail(true);
    const body = {
      name,
      email,
      // message,
      project,
      objectives: checkboxList.filter(c => c.checked).map(c => t(c.text || '')),
      phone,
      hearFrom,
    };
    axios
      .post('/api/sendMail', body)
      .then(() => {
        cleanForm();
        toast({
          message: t('toast-contact-success-message'),
          description: t('success-sending-contact-email') || '',
          actionLabel: 'ACTION',
          noCloseButton: true,
          noIcon: true,
          noAction: true,
          type: 'success',
          isSnackbar: false,
        });
      })
      .catch(err => {
        toast({
          message: t('toast-contact-error-message'),
          description: err.response?.data?.error || t('error-sending-contact-email') || '',
          actionLabel: 'ACTION',
          noCloseButton: true,
          noIcon: true,
          noAction: true,
          type: 'error',
          isSnackbar: false,
        });
      })
      .finally(() => {
        setSendingEmail(false);
        if (setLoading) setLoading(false);
      });
  };

  return (
    <StyledContactUs>
      <ContactFormContainer>
        <TitleContainer>
          <Typography
            colorPreset="secondary"
            fontSize={isTableScreen && !objectives ? '100px' : '60px'}
            fontFamily="Teko"
            fontWeight="500"
            lineHeight="100%"
            width="280px"
            height="70px"
            textAlign="center"
          >
            {t(title)}
          </Typography>

          <ImageContainer>
            {imageUrl && (
              <Image
                alt={t(title)}
                fill
                src={imageUrl}
                style={{
                  objectFit: 'fill',
                }}
                title={t(title) || ''}
              />
            )}
          </ImageContainer>
        </TitleContainer>
        <ContactInfoForm method="get" onSubmit={handleSend} id="landing-contact-us-form">
          <Input
            autoComplete="name"
            required
            aria-label={t('form-name-text') || ''}
            maskPreset="text"
            text={t('form-name-text') || undefined}
            type="text"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
          />
          <Input
            required
            autoComplete="email"
            aria-label={t('form-email-text') || ''}
            maskPreset="email"
            text={t('form-email-text') || undefined}
            type="text"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
          <Input
            autoComplete="tel"
            aria-label={t('form-phone-optional-number') || ''}
            maskPreset="text"
            text={t('form-phone-optional-number') || undefined}
            type="phone"
            value={phone}
            onChange={e => setPhone(e.currentTarget.value)}
          />
          <Input
            autoComplete="on"
            aria-label={t('contact-us-form-hear-about-us') || ''}
            maskPreset="text"
            text={t('contact-us-form-hear-about-us') || undefined}
            type="text"
            value={hearFrom}
            onChange={e => setHearFrom(e.currentTarget.value)}
          />
          <Input
            autoComplete="on"
            required
            aria-label={t('contact-us-form-project-description') || ''}
            maskPreset="text"
            text={t('contact-us-form-project-description') || undefined}
            type="text"
            value={project}
            onChange={e => setProject(e.currentTarget.value)}
          />
        </ContactInfoForm>
        <CheckContainer>
          <CheckWrapper>
            <Typography
              fontSize="20px"
              fontWeight="700"
              lineHeight="23px"
              colorPreset="secondary"
              style={{paddingTop: '10px'}}
            >
              {t('contact-us-main-objective-title')}
            </Typography>
            {checkboxList.map((item, idx) => (
              <CheckButton
                key={item.text}
                height="20px"
                width="20px"
                fontSize="16px"
                text={`${t(item.text || '')}${idx === checkboxList.length - 1 ? '...' : ''}`}
                onChange={() => item.text && handleCheckToggle(item.text)}
                checked={item.checked}
              />
            ))}
          </CheckWrapper>
          <ButtonContainer>
            <Button
              style={{cursor: 'pointer'}}
              afterIcon={ArrowRight}
              text={t('landing-contact-us-send-button') || undefined}
              // presetSize="large"
              type="submit"
              form="landing-contact-us-form"
              disabled={sendingEmail}
            />
          </ButtonContainer>
        </CheckContainer>
      </ContactFormContainer>
    </StyledContactUs>
  );
}

export default ContactUsSection;
