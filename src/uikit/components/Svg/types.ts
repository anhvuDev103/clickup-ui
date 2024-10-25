import { ColorTokens } from '@configs/ui/tokens/types';
import { SpaceProps } from 'styled-system';

export interface SvgProps extends Omit<React.SVGProps<SVGSVGElement>, 'color'>, SpaceProps {
  color?: keyof ColorTokens['colors'];
}
