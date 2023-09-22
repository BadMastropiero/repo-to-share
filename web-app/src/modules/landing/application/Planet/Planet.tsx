// Components
// import Image from 'next/image';
import Parallax from 'components/Parallax/Parallax';
import {devices, useMediaQuery} from 'tetraimpacts-components-library';

// Config
import Astronaut from '../Astronaut/Astronaut';
import Debris from '../Debris/Debris';
import House from '../House/House';

// Interfaces
import PlanetProps from './Planet.interface';

// Styles
import {
  Content,
  DebrisWrapper,
  Mountains,
  PlanetBg,
  River,
  RiverWrapper,
  TetraAstronautWrapper,
} from './Planet.styles';

function Planet({children}: PlanetProps) {
  const [isTabletScreen] = useMediaQuery(devices.tablet);

  return (
    <PlanetBg>
      {isTabletScreen && (
        <DebrisWrapper>
          <Parallax speed={15} style={{zIndex: 2}}>
            <Debris hasPriority />
          </Parallax>
        </DebrisWrapper>
      )}

      <Content>
        {children}

        <TetraAstronautWrapper>
          <Parallax speed={10}>
            <Astronaut />
          </Parallax>
        </TetraAstronautWrapper>

        <House />
        <Mountains />
      </Content>

      <RiverWrapper>
        <River
          src="/illustrations/landing/river.svg#svgView(preserveAspectRatio(none))"
          alt="river"
          width="100%"
          height="100%"
        />
      </RiverWrapper>
    </PlanetBg>
  );
}

export default Planet;
