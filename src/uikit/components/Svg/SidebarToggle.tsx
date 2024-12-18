import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M5 4.83A1.17 1.17 0 0 0 3.83 6v12c0 .646.524 1.17 1.17 1.17h5.17V4.83H5Zm6.83 0v14.34H19A1.17 1.17 0 0 0 20.17 18V6A1.17 1.17 0 0 0 19 4.83h-7.17ZM2.17 6A2.83 2.83 0 0 1 5 3.17h14A2.83 2.83 0 0 1 21.83 6v12A2.83 2.83 0 0 1 19 20.83H5A2.83 2.83 0 0 1 2.17 18V6Zm3 2A.83.83 0 0 1 6 7.17h2a.83.83 0 0 1 0 1.66H6A.83.83 0 0 1 5.17 8Zm0 2.5A.83.83 0 0 1 6 9.67h2a.83.83 0 1 1 0 1.66H6a.83.83 0 0 1-.83-.83Zm0 2.5a.83.83 0 0 1 .83-.83h2a.83.83 0 1 1 0 1.66H6a.83.83 0 0 1-.83-.83Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
