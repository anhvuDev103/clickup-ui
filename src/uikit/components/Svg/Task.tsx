import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M14.515 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-3.515l-2 2V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5.515l2-2Z'
        clipRule='evenodd'
      ></path>
      <path
        fillRule='evenodd'
        d='M20.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L12 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
