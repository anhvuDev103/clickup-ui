import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M6.5 5a1.5 1.5 0 1 0 0 3H8V6.5A1.5 1.5 0 0 0 6.5 5ZM10 8V6.5A3.5 3.5 0 1 0 6.5 10H8v4H6.5a3.5 3.5 0 1 0 3.5 3.5V16h4v1.5a3.5 3.5 0 1 0 3.5-3.5H16v-4h1.5A3.5 3.5 0 1 0 14 6.5V8h-4Zm0 2v4h4v-4h-4Zm6-2h1.5A1.5 1.5 0 1 0 16 6.5V8Zm0 8v1.5a1.5 1.5 0 1 0 1.5-1.5H16Zm-8 0H6.5A1.5 1.5 0 1 0 8 17.5V16Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
