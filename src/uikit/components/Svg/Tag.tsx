import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M6 5h4.757a1 1 0 0 1 .707.293l7.5 7.5a1 1 0 0 1 0 1.414l-4.757 4.758a1 1 0 0 1-1.414 0l-7.5-7.5A1 1 0 0 1 5 10.756V6a1 1 0 0 1 1-1ZM3 6a3 3 0 0 1 3-3h4.757a3 3 0 0 1 2.122.879l7.5 7.5a3 3 0 0 1 0 4.242L15.62 20.38a3 3 0 0 1-4.242 0l-7.5-7.5A3 3 0 0 1 3 10.757V6Zm6 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
