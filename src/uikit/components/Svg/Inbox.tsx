import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M5.703 5.596A2.83 2.83 0 0 1 8.161 4.17h7.678a2.83 2.83 0 0 1 2.457 1.426l3.425 5.992a.83.83 0 0 1 .109.412v5A2.83 2.83 0 0 1 19 19.83H5A2.83 2.83 0 0 1 2.17 17v-5a.83.83 0 0 1 .11-.412l3.423-5.992Zm2.458.234c-.42 0-.808.225-1.016.59L4.43 11.17H8a.83.83 0 0 1 .587.243l1.757 1.757h3.312l1.757-1.757A.83.83 0 0 1 16 11.17h3.57l-2.715-4.75a1.17 1.17 0 0 0-1.016-.59H8.161Zm12.009 7h-3.826l-1.757 1.757a.83.83 0 0 1-.587.243h-4a.83.83 0 0 1-.587-.243L7.656 12.83H3.83V17c0 .646.524 1.17 1.17 1.17h14A1.17 1.17 0 0 0 20.17 17v-4.17Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
