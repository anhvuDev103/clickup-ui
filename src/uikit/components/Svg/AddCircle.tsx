import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-4.889a1 1 0 0 1 1 1V11h3.111a1 1 0 1 1 0 2H13v3.111a1 1 0 1 1-2 0V13H8.111a1 1 0 1 1 0-2H11V8.111a1 1 0 0 1 1-1Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
