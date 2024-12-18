import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <>
      <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M20.644 5.353c.475.47.475 1.232 0 1.702L9.94 17.647c-.475.47-1.245.47-1.72 0l-4.865-4.814a1.195 1.195 0 0 1 0-1.703 1.225 1.225 0 0 1 1.72 0l4.005 3.964 9.843-9.741a1.225 1.225 0 0 1 1.72 0Z'
          clipRule='evenodd'
        ></path>
      </Svg>
    </>
  );
};

export default Icon;
