// Config
import {devices, useMediaQuery} from 'tetraimpacts-components-library';

// Interfaces
import AstronautProps from './Astronaut.interface';

// Styles
import {TetraAstronaut} from './Astronaut.styles';

function Astronaut({style}: AstronautProps) {
  const [isTabletScreen] = useMediaQuery(devices.tablet);

  return (
    <TetraAstronaut
      src="/illustrations/landing/tetra_astronaut.svg"
      alt="astronaut"
      width={isTabletScreen ? 233 : 84}
      height={isTabletScreen ? 319 : 116}
      style={style}
      sizes="(max-width: 768px) 84px, 233px"
    />
  );
}

export default Astronaut;
