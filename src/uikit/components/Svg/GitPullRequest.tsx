import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M5.5 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM2 5a3.5 3.5 0 1 1 4.5 3.355v7.29a3.502 3.502 0 0 1-1 6.855 3.5 3.5 0 0 1-1-6.855v-7.29A3.502 3.502 0 0 1 2 5Zm12.707-3.207a1 1 0 0 1 0 1.414L13.914 4H15.5a4 4 0 0 1 4 4v7.645a3.502 3.502 0 0 1-1 6.855 3.5 3.5 0 0 1-1-6.855V8a2 2 0 0 0-2-2h-1.586l.793.793a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0ZM5.5 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
