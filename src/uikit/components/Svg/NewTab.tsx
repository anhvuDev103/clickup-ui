import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M21.383 2.076A1 1 0 0 1 22 3v4.5a1 1 0 1 1-2 0V5.414l-7.293 7.293a1 1 0 1 1-1.414-1.414l7.283-7.283-2.08-.01a1 1 0 0 1 .009-2l4.298.02a.999.999 0 0 1 .58.056ZM4 8a4 4 0 0 1 4-4h4a1 1 0 1 1 0 2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a1 1 0 1 1 2 0v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
