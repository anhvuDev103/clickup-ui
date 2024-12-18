import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M7 9.222C7 7.995 7.995 7 9.222 7h5.556C16.005 7 17 7.995 17 9.222v5.556A2.222 2.222 0 0 1 14.778 17H9.222A2.222 2.222 0 0 1 7 14.778V9.222ZM9.222 9h5.556c.122 0 .222.1.222.222v5.556c0 .122-.1.222-.222.222H9.222A.222.222 0 0 1 9 14.778V9.222C9 9.1 9.1 9 9.222 9Z'
        clipRule='evenodd'
      ></path>
      <path
        fillRule='evenodd'
        d='M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Zm4-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
