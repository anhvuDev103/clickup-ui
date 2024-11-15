import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M7 1a1 1 0 0 1 1 1v1h8V2a1 1 0 1 1 2 0v1.126c1.725.444 3 2.01 3 3.874v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4.002 4.002 0 0 1 3-3.874V2a1 1 0 0 1 1-1Zm0 4a2 2 0 0 0-2 2v1h14V7a2 2 0 0 0-2-2H7Zm12 5H5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7ZM6.5 12.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
