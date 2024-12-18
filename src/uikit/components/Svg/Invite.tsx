import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M9 2.872a2.377 2.377 0 1 0 0 4.755 2.377 2.377 0 0 0 0-4.755Zm2.31 5.17a3.622 3.622 0 1 0-4.618 0 6.625 6.625 0 0 0-4.308 6.488c.01.238.154.45.373.545a15.571 15.571 0 0 0 7.279 1.264.623.623 0 0 0-.082-1.243 14.337 14.337 0 0 1-6.33-1.007 5.378 5.378 0 0 1 9.073-3.745.622.622 0 1 0 .856-.904 6.627 6.627 0 0 0-2.244-1.399Zm2.94 3.335c.344 0 .623.28.623.623v1.627H16.5a.622.622 0 1 1 0 1.245h-1.627V16.5a.622.622 0 1 1-1.245 0v-1.628H12a.622.622 0 1 1 0-1.245h1.628V12c0-.344.279-.623.622-.623Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
