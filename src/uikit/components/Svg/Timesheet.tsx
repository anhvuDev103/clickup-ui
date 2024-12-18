import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M11.425 8.484c-1.45-.883-3.255.19-3.255 1.854v5.324c0 1.664 1.806 2.737 3.255 1.854l4.368-2.662c1.383-.842 1.383-2.866 0-3.708l-4.368-2.662ZM9.83 10.338c0-.413.426-.622.73-.437l4.37 2.662c.32.196.32.678 0 .874l-4.37 2.662a.486.486 0 0 1-.73-.437v-5.324Z'
        clipRule='evenodd'
      ></path>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M8 .17a.83.83 0 0 0 0 1.66h3.17v1.374c-5.04.422-9 4.647-9 9.796 0 5.429 4.401 9.83 9.83 9.83s9.83-4.401 9.83-9.83c0-5.15-3.96-9.374-9-9.796V1.83H16a.83.83 0 1 0 0-1.66H8ZM3.83 13a8.17 8.17 0 1 1 16.34 0 8.17 8.17 0 0 1-16.34 0Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
