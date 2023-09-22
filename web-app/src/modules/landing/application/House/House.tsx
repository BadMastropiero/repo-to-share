// Components
// import Image from 'next/image';

// Hooks
import {useScroll, animated, useSpring, config} from '@react-spring/web';

// Interfaces
import HouseProps from './House.interface';

// Styles
import {HexQuasExort, TetraHouse, TetraHouseContainer, TetraHouseWrapper} from './House.styles';

function House({style}: HouseProps) {
  // hexQuasExortSpring animation
  const [hexQuasExortSpring, hexQuasExortSpringApi] = useSpring(() => ({
    y: '0',
    config: config.wobbly,
  }));
  // const {scrollYProgress} = useScroll({
  useScroll({
    onChange: ({value: {scrollYProgress: YProgress}}) => {
      hexQuasExortSpringApi.start({y: `${YProgress * 20}%`});
    },
    default: {
      immediate: false,
    },
  });

  return (
    <TetraHouseWrapper style={style}>
      <TetraHouseContainer>
        <TetraHouse
          src="/illustrations/landing/house.svg"
          alt="house"
          fill
          sizes="(max-width: 768px) 140px"
        />
      </TetraHouseContainer>
      <animated.div
        style={{
          left: 0,
          top: 0,
          position: 'absolute',
          ...hexQuasExortSpring,
        }}
      >
        <TetraHouseContainer>
          <HexQuasExort src="/illustrations/landing/invoker_tech_sigils.svg" alt="house" fill />
        </TetraHouseContainer>
      </animated.div>
    </TetraHouseWrapper>
  );
}

export default House;
