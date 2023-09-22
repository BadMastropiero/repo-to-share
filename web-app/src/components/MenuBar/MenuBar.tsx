import Link from 'next/link';
import {useContext, useState} from 'react';
import {Button, MenuClose, MenuOpen} from 'tetraimpacts-components-library';
import {ThemeContext} from 'styled-components';

// Hooks
import {useTranslation} from 'next-i18next';
import useStickOnScroll from 'hooks/stickOnScroll';

// Styles
import {IndexContainer, IndexContent, Option} from './MenuBar.styles';

// Interfaces
import IMenuBar from './MenuBar.interface';

export default function MenuBar({options}: IMenuBar) {
  const [toggleMenuBar, setToggleMenuBar] = useState<boolean>(false);
  const {colors} = useContext(ThemeContext);
  const {t} = useTranslation();

  const isFixed = useStickOnScroll();

  return (
    <IndexContainer floating={toggleMenuBar} isFixed={isFixed}>
      <Button
        afterIconComponent={
          !toggleMenuBar ? (
            <MenuOpen width="16px" height="16px" primary />
          ) : (
            <MenuClose width="16px" height="16px" primary />
          )
        }
        style={{
          height: '36px',
          width: '36px',
        }}
        onClick={() => setToggleMenuBar(!toggleMenuBar)}
        aria-label={`${t('toggle-sidebar')}`}
      />
      <IndexContent>
        {toggleMenuBar &&
          options.map(option => (
            <Link
              key={option.id}
              href={`#${option.id}`}
              onClick={() => setToggleMenuBar(!toggleMenuBar)}
            >
              <Option customColor={colors.primary} textType={option.type} textAlign="right">
                {option.title}
              </Option>
            </Link>
          ))}
      </IndexContent>
    </IndexContainer>
  );
}
