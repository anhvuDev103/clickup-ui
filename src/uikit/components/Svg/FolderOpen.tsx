import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M5 19.83A2.83 2.83 0 0 1 2.17 17V7A2.83 2.83 0 0 1 5 4.17h7.171c.751 0 1.47.298 2.002.829l2.17 2.171H19A2.83 2.83 0 0 1 21.83 10v.17h.552a1.83 1.83 0 0 1 1.637 2.649l-2.724 5.447a2.83 2.83 0 0 1-2.531 1.564H5Zm15.17-9.66V10A1.17 1.17 0 0 0 19 8.83h-3a.83.83 0 0 1-.587-.243l-2.414-2.414a1.17 1.17 0 0 0-.828-.343H5A1.17 1.17 0 0 0 3.83 7v10c0 .128.02.252.059.367l3.092-6.185a1.83 1.83 0 0 1 1.637-1.012H20.17Zm-14.827 8 3.123-6.246a.17.17 0 0 1 .152-.094h13.764a.17.17 0 0 1 .152.246l-2.724 5.447a1.17 1.17 0 0 1-1.046.647H5.343Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
