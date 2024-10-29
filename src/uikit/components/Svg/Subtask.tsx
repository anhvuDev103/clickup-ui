import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M6.75 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm1 1.874A4.002 4.002 0 0 0 6.75 2a4 4 0 0 0-1 7.874V13a6 6 0 0 0 6 6h1.626a4.002 4.002 0 0 0 7.874-1 4 4 0 0 0-7.874-1H11.75a4 4 0 0 1-4-4V9.874ZM17.25 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
