import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path d='M7.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm4.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'></path>
      <path
        fillRule='evenodd'
        d='M12 2.17c-5.43 0-9.83 4.4-9.83 9.83s4.4 9.83 9.83 9.83 9.83-4.401 9.83-9.83S17.429 2.17 12 2.17ZM3.83 12a8.17 8.17 0 1 1 16.34 0 8.17 8.17 0 0 1-16.34 0Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
