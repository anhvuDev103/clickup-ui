import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M2 9a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v6a7 7 0 0 1-7 7H9a7 7 0 0 1-7-7V9Zm7-5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H9Z'
        clipRule='evenodd'
      ></path>
      <path
        fillRule='evenodd'
        d='M8.146 15.07a.477.477 0 0 1 .081-.691l.744-.57a.533.533 0 0 1 .716.08c.724.8 1.49 1.174 2.332 1.174.834 0 1.58-.366 2.272-1.154a.535.535 0 0 1 .715-.093l.755.556c.222.164.27.478.093.69-1.069 1.27-2.36 1.938-3.835 1.938-1.471 0-2.774-.664-3.873-1.93Zm3.868-5.508-2.36 2.033a.5.5 0 0 1-.704-.053l-.612-.71a.5.5 0 0 1 .052-.705l3.301-2.845a.5.5 0 0 1 .655.002l3.272 2.844a.5.5 0 0 1 .05.706l-.615.707a.5.5 0 0 1-.706.05l-2.333-2.029Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
