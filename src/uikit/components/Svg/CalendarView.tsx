import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        stroke='transparent'
        d='M4.667 1.333c.368 0 .666.299.666.667v.667h5.334V2A.667.667 0 1 1 12 2v.75c1.15.297 2 1.34 2 2.583V12a2.667 2.667 0 0 1-2.667 2.667H4.667A2.667 2.667 0 0 1 2 12V5.333c0-1.242.85-2.286 2-2.582V2c0-.368.298-.667.667-.667zm0 2.667c-.737 0-1.334.597-1.334 1.333V6h9.334v-.667c0-.736-.597-1.333-1.334-1.333H4.667zm8 3.333H3.333V12c0 .736.597 1.333 1.334 1.333h6.666c.737 0 1.334-.597 1.334-1.333V7.333z'
        clipRule='evenodd'
      />
    </Svg>
  );
};

export default Icon;
