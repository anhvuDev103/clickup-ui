import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M8 2a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2v1.055A9.001 9.001 0 0 1 12 22a9 9 0 0 1-1-17.945V3H9a1 1 0 0 1-1-1Zm4 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 2a1 1 0 0 1 1 1v3.485l3.081 2.201a1 1 0 1 1-1.162 1.628l-3.5-2.5A1 1 0 0 1 11 13V9a1 1 0 0 1 1-1Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
