import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M5 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5ZM2 5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3 3 3 0 0 1 3 3v1a4 4 0 0 1-4 4h-5a1 1 0 0 0-1 1v.208a2.5 2.5 0 0 1 1.5 2.292v3a2.5 2.5 0 0 1-5 0v-3a2.5 2.5 0 0 1 1.5-2.292V14a3 3 0 0 1 3-3h5a2 2 0 0 0 2-2V8a1 1 0 0 0-1-1 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm9 11a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
