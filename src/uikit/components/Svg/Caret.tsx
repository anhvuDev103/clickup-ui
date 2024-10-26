import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path d='M8.25 17.193V6.807c0-.718.956-1.077 1.516-.569l5.724 5.19a.757.757 0 0 1 0 1.143l-5.724 5.19c-.56.51-1.516.15-1.516-.568Z'></path>
    </Svg>
  );
};

export default Icon;
