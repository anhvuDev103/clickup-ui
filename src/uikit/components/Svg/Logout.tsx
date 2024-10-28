import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M3.044 7.555A10 10 0 0 1 12.004 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10 10 0 0 1-8.96-5.555 1 1 0 1 1 1.791-.89 8 8 0 1 0 0-7.11 1 1 0 0 1-1.79-.89Zm7.189-.264a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414l2.293-2.293H2.94a1 1 0 1 1 0-2h9.586l-2.293-2.293a1 1 0 0 1 0-1.414Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
