import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z'
        clipRule='evenodd'
      ></path>
      <path fill='#33a069' d='M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z'></path>
    </Svg>
  );
};

export default Icon;
