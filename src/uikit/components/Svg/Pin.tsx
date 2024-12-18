import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M8 4h.336l-.458 4.08C6.564 8.935 4 10.91 4 15a1 1 0 0 0 1 1h6v5a1 1 0 1 0 2 0v-5h6a1 1 0 0 0 1-1c0-4.09-2.564-6.064-3.878-6.92L15.664 4H16a1 1 0 1 0 0-2H8a1 1 0 0 0 0 2Zm4 10h5.93c-.389-2.67-2.291-3.866-3.241-4.462l-.04-.025a1 1 0 0 1-.46-.735L13.651 4h-3.303l-.537 4.778a1 1 0 0 1-.462.735l-.039.025c-.95.596-2.852 1.791-3.24 4.462H12Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
