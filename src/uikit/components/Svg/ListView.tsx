import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='currentColor' {...props}>
      <path
        stroke='transparent'
        d='M2.667 2a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667zM6 2.667A.667.667 0 1 0 6 4h8a.667.667 0 0 0 0-1.333H6zm-3.333 4a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666zM6 7.333a.667.667 0 0 0 0 1.334h8a.667.667 0 0 0 0-1.334H6zm-3.333 4a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667zM6 12a.667.667 0 0 0 0 1.333h8A.667.667 0 1 0 14 12H6z'
      />
    </Svg>
  );
};

export default Icon;
