import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M12.907 5.57a1.05 1.05 0 0 0-1.814 0L9.415 8.441l-3.25.709a1.05 1.05 0 0 0-.561 1.724l2.213 2.484-.33 3.31a1.05 1.05 0 0 0 1.467 1.066L12 16.398l3.046 1.337a1.05 1.05 0 0 0 1.467-1.065l-.33-3.31 2.213-2.485a1.05 1.05 0 0 0-.56-1.724l-3.25-.71-1.68-2.872ZM10.93 9.81 12 7.982l1.069 1.829c.148.254.396.434.683.496l2.07.451-1.41 1.582c-.195.22-.29.51-.26.803l.21 2.108-1.94-.852a1.05 1.05 0 0 0-.844 0l-1.94.852.21-2.108a1.05 1.05 0 0 0-.26-.803l-1.41-1.582 2.07-.45a1.05 1.05 0 0 0 .683-.497Z'
        clipRule='evenodd'
      ></path>
      <path
        fillRule='evenodd'
        d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
