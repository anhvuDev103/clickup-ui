import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path d='m2.5 9.054 9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 0 0 0-1.73l-9-5.19a1 1 0 0 0-1 0l-9 5.19a1 1 0 0 0 0 1.73Zm9.5-4.86 7 4-7 4-7-4 7-4Zm8.5 7.17-8.5 4.83-8.5-4.87a1 1 0 0 0-1.465 1.126 1 1 0 0 0 .465.604l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 1 0-1-1.73v.04Zm0 4-8.5 4.83-8.5-4.87a1 1 0 0 0-1.465 1.126 1 1 0 0 0 .465.604l9 5.2a1 1 0 0 0 1 0l9-5.2a1 1 0 1 0-1-1.73v.04Z'></path>
    </Svg>
  );
};

export default Icon;
