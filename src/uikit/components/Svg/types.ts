import { Color } from '@vite-env';
import { SpaceProps } from 'styled-system';

export interface SvgProps extends Omit<React.SVGProps<SVGSVGElement>, 'color'>, SpaceProps {
  color?: Color;
}
