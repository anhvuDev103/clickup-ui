import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M6 6h12a2 2 0 0 1 1.75 1.031.997.997 0 0 0-.35.169L12 12.75 4.6 7.2a.997.997 0 0 0-.35-.169A2 2 0 0 1 6 6zM4 9.25V16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.25l-7.4 5.55a1 1 0 0 1-1.2 0L4 9.25zM2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'
        clipRule='evenodd'
      />
    </Svg>
  );
};

export default Icon;
