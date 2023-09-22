import { WithGeneric } from '../Generic/Generic';
import Card from './Card';
import { CardContent, CardBack, CardControls, CardFront, CardHeader, } from './CardHelpers/CardHelpers.styles';
export { Card, CardContent, CardBack, CardControls, CardFront, CardHeader };
// Wrrapping it in a genereci HOC that provides steady api to easily stylize component
export default WithGeneric(Card);
//# sourceMappingURL=index.js.map