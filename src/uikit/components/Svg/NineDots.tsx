import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <path
        fill='currentColor'
        d='M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-9 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-9 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
      ></path>
    </Svg>
  );
};

export default Icon;
