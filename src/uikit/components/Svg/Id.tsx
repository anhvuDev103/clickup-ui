import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M5 6a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V7a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H5Zm11-1a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V7a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1ZM9 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm2 1a1 1 0 0 1 1-1h1a4 4 0 0 1 0 8h-1a1 1 0 0 1-1-1V9Zm2 1v4a2 2 0 1 0 0-4ZM3 14a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1Zm18 0a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
