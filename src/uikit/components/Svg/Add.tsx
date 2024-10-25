import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v5.995a1 1 0 1 0 2 0V13h5.995a1 1 0 1 0 0-2H13V5Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
