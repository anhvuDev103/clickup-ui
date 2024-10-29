import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M7.83 7a3.001 3.001 0 1 1 0-2H21a1 1 0 1 1 0 2H7.83ZM6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 5a1 1 0 1 0 0 2h11.17a3.001 3.001 0 0 0 5.66 0H21a1 1 0 1 0 0-2h-1.17a3.001 3.001 0 0 0-5.66 0H3Zm14 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 17a1 1 0 1 0 0 2h3.17a3.002 3.002 0 0 0 5.66 0H21a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0H3Zm7 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
