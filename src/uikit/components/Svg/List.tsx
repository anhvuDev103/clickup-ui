import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path d='M4.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 6.17a.83.83 0 0 0 0 1.66h12a.83.83 0 1 0 0-1.66H8Zm0 5a.83.83 0 0 0 0 1.66h12a.83.83 0 1 0 0-1.66H8Zm0 5a.83.83 0 0 0 0 1.66h12a.83.83 0 1 0 0-1.66H8ZM6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'></path>
    </Svg>
  );
};

export default Icon;
