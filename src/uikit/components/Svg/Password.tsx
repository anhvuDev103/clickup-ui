import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M7 7a5 5 0 0 1 10 0v2a3 3 0 0 1 3 3v5.172a3 3 0 0 1-.879 2.12l-1.828 1.83a3 3 0 0 1-2.121.878H8.828a3 3 0 0 1-2.12-.879l-1.83-1.828A3 3 0 0 1 4 17.172V12a3 3 0 0 1 3-3V7zm0 4a1 1 0 0 0-1 1v5.172a1 1 0 0 0 .293.707l1.828 1.828a1 1 0 0 0 .707.293h6.344a1 1 0 0 0 .707-.293l1.828-1.828a1 1 0 0 0 .293-.707V12a1 1 0 0 0-1-1H7zm8-2H9V7a3 3 0 1 1 6 0v2zm-3 5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z'
        clipRule='evenodd'
      />
    </Svg>
  );
};

export default Icon;
