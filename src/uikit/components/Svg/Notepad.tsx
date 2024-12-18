import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M8 2a1 1 0 0 1 1 1v1h2V3a1 1 0 1 1 2 0v1h2V3a1 1 0 1 1 2 0v1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3V3a1 1 0 0 1 1-1ZM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Zm5 1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm5 5a1 1 0 0 0-1-1H9a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1Zm-1 3a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h6Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
