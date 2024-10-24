import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M11 3a8 8 0 1 0 4.906 14.32l3.387 3.387a1 1 0 0 0 1.414-1.414l-3.387-3.387A8 8 0 0 0 11 3Zm-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
