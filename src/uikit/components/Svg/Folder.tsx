import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M3.83 17c0 .646.524 1.17 1.17 1.17h14A1.17 1.17 0 0 0 20.17 17v-7A1.17 1.17 0 0 0 19 8.83H3.83V17Zm0-9.83h10.166L13 6.173a1.17 1.17 0 0 0-.828-.343H5A1.17 1.17 0 0 0 3.83 7v.17Zm12.514 0L14.173 5a2.83 2.83 0 0 0-2.002-.829H5A2.83 2.83 0 0 0 2.17 7v10A2.83 2.83 0 0 0 5 19.83h14A2.83 2.83 0 0 0 21.83 17v-7A2.83 2.83 0 0 0 19 7.17h-2.656Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
