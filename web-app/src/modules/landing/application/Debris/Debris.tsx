// Interfaces
import DebrisProps from './Debris.interface';

// Styles
import {DebrisStyled} from './Debris.styles';

function Debris({style, hasPriority = false}: DebrisProps) {
  return (
    <DebrisStyled
      src="/illustrations/landing/cosmic_cool_debris.svg"
      alt="cosmic cool debris"
      width={980}
      height={470}
      priority={hasPriority}
      style={style}
      sizes="(min-width: 768px) 980px"
    />
  );
}

export default Debris;
