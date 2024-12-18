import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M13 6.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM18.5 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM6 6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4a1 1 0 1 1 2 0v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h5a1 1 0 1 1 0 2H6Zm12.5-2a1 1 0 0 1 1 1v.78l.816.271a1 1 0 1 1-.632 1.898l-1.5-.5A1 1 0 0 1 17.5 6.5V5a1 1 0 0 1 1-1Zm-10 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V14a1 1 0 1 1 2 0v1.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 6 15.5v-5A2.5 2.5 0 0 1 8.5 8H11a1 1 0 1 1 0 2H8.5Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
