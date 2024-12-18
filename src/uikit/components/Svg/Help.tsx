import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M3.83 12a8.17 8.17 0 1 1 16.34 0 8.17 8.17 0 0 1-16.34 0ZM12 2.17c-5.43 0-9.83 4.4-9.83 9.83s4.4 9.83 9.83 9.83 9.83-4.401 9.83-9.83S17.429 2.17 12 2.17ZM9.83 10A2.17 2.17 0 0 1 12 7.83h.394a1.776 1.776 0 0 1 .985 3.253l-.504.336a3.83 3.83 0 0 0-1.705 3.186V15h1.66v-.395c0-.725.363-1.403.966-1.805l.504-.336a3.436 3.436 0 0 0-1.906-6.294H12A3.83 3.83 0 0 0 8.17 10h1.66ZM12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
