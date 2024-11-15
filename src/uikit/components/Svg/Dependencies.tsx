import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M2 4.5A2.5 2.5 0 0 1 4.5 2h2a2.5 2.5 0 0 1 2.45 2H10a3 3 0 0 1 3 3v2h3.5a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5H13v2a1 1 0 0 0 1 1h1.05a2.5 2.5 0 0 1 2.45-2h2a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5h-2a2.5 2.5 0 0 1-2.45-2H14a3 3 0 0 1-3-3v-2H7.5A2.5 2.5 0 0 1 5 12.5v-1A2.5 2.5 0 0 1 7.5 9H11V7a1 1 0 0 0-1-1H8.95A2.5 2.5 0 0 1 6.5 8h-2A2.5 2.5 0 0 1 2 5.5v-1ZM4.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Zm3 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-9Zm10 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
