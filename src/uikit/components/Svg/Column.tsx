import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M2 6.5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-11Zm3-1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h3v-13H5Zm5 0v13h4v-13h-4Zm6 0v13h3a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-3Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
