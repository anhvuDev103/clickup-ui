import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M3.17 6A2.83 2.83 0 0 1 6 3.17h12A2.83 2.83 0 0 1 20.83 6v12A2.83 2.83 0 0 1 18 20.83H6A2.83 2.83 0 0 1 3.17 18V6ZM6 4.83A1.17 1.17 0 0 0 4.83 6v12c0 .646.524 1.17 1.17 1.17h12A1.17 1.17 0 0 0 19.17 18V6A1.17 1.17 0 0 0 18 4.83H6Zm10 2.34a.83.83 0 0 1 .83.83v8a.83.83 0 1 1-1.66 0V8a.83.83 0 0 1 .83-.83Zm-4 2.5a.83.83 0 0 1 .83.83V16a.83.83 0 1 1-1.66 0v-5.5a.83.83 0 0 1 .83-.83Zm-4 2.5a.83.83 0 0 1 .83.83v3a.83.83 0 1 1-1.66 0v-3a.83.83 0 0 1 .83-.83Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
