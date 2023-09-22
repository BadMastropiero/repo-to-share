// Interfaces
import AsteroidProps from './Asteroid.interface';

// Styles
import {AsteroidStyled, BlurredEffect, Container} from './Asteroid.styles';

function Asteroid({style, size = 50, blurAmount = 4}: AsteroidProps) {
  return (
    <Container style={style}>
      <AsteroidStyled size={size} />
      <BlurredEffect size={size} blurAmount={blurAmount} />
    </Container>
  );
}

export default Asteroid;
