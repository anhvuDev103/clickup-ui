import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M11.594 4.126a.983.983 0 0 1 .812 0l6.239 2.826L12 9.906 5.355 6.952l6.239-2.826ZM4 8.54v7.232c0 .403.233.768.594.932L11 19.605V11.65L4 8.539Zm9 11.066 6.406-2.902A1.02 1.02 0 0 0 20 15.77V8.54l-7 3.11v7.956Zm.218-17.341a2.948 2.948 0 0 0-2.436 0l-7 3.17A3.06 3.06 0 0 0 2 8.23v7.542a3.06 3.06 0 0 0 1.782 2.794l7 3.171a2.949 2.949 0 0 0 2.436 0l7-3.17A3.06 3.06 0 0 0 22 15.77V8.23a3.06 3.06 0 0 0-1.782-2.795l-7-3.17Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
