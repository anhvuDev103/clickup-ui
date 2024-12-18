import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M5 2a1 1 0 0 0 0 2h1v3a5.994 5.994 0 0 0 2.682 5A5.994 5.994 0 0 0 6 17v3H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-1v-3a5.994 5.994 0 0 0-2.682-5A5.994 5.994 0 0 0 18 7V4h1a1 1 0 1 0 0-2H5Zm7 9a4 4 0 0 0 4-4V4H8v3a4 4 0 0 0 4 4Zm4 9v-3a4 4 0 0 0-8 0v3h8Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
