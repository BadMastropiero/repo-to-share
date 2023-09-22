// Hooks
import {useContext} from 'react';
import {ThemeContext} from 'styled-components';

// Components
import {PuffLoader} from 'react-spinners';
import StyledLoaderContainer from './Loader.styles';

// Interfaces
import {LoaderProps} from './Loader.interface';

function Loader({loading = false, primary = false, children, style}: LoaderProps) {
  const {colors} = useContext(ThemeContext);
  return loading ? (
    <StyledLoaderContainer style={style}>
      {children || (
        <PuffLoader
          color={primary ? colors.primary800 : colors.primary200}
          size="150px"
          cssOverride={{
            backdropFilter: 'blur(0.5px)',
          }}
        />
      )}
    </StyledLoaderContainer>
  ) : null;
}

export default Loader;
