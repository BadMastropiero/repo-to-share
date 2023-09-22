import {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {DynamicComponentsProps} from './DynamicComponent.interface';
import {StyledDynamicComponent} from './DynamicComponent.styles';

const DynamicComponent: React.FC<DynamicComponentsProps> = ({tag = 'div', children, ...props}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledDynamicComponent as={themeContext.variantsMapping[tag] || 'div'} {...props}>
      {children}
    </StyledDynamicComponent>
  );
};

export default DynamicComponent;
