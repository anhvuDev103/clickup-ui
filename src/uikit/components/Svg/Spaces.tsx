import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor' {...props}>
      <path
        fillRule='evenodd'
        d='M5 3.17c-1.01 0-1.83.82-1.83 1.83v4.5c0 1.01.82 1.83 1.83 1.83h4.5c1.01 0 1.83-.82 1.83-1.83V5c0-1.01-.82-1.83-1.83-1.83H5ZM4.83 5A.17.17 0 0 1 5 4.83h4.5a.17.17 0 0 1 .17.17v4.5a.17.17 0 0 1-.17.17H5a.17.17 0 0 1-.17-.17V5Zm9.67-1.83c-1.01 0-1.83.82-1.83 1.83v4.5c0 1.01.82 1.83 1.83 1.83H19c1.01 0 1.83-.82 1.83-1.83V5c0-1.01-.82-1.83-1.83-1.83h-4.5ZM14.33 5a.17.17 0 0 1 .17-.17H19a.17.17 0 0 1 .17.17v4.5a.17.17 0 0 1-.17.17h-4.5a.17.17 0 0 1-.17-.17V5Zm-1.66 9.5c0-1.01.82-1.83 1.83-1.83H19c1.01 0 1.83.82 1.83 1.83V19c0 1.01-.82 1.83-1.83 1.83h-4.5A1.83 1.83 0 0 1 12.67 19v-4.5Zm1.83-.17a.17.17 0 0 0-.17.17V19c0 .094.076.17.17.17H19a.17.17 0 0 0 .17-.17v-4.5a.17.17 0 0 0-.17-.17h-4.5ZM5 12.67c-1.01 0-1.83.82-1.83 1.83V19c0 1.01.82 1.83 1.83 1.83h4.5c1.01 0 1.83-.82 1.83-1.83v-4.5c0-1.01-.82-1.83-1.83-1.83H5Zm-.17 1.83a.17.17 0 0 1 .17-.17h4.5a.17.17 0 0 1 .17.17V19a.17.17 0 0 1-.17.17H5a.17.17 0 0 1-.17-.17v-4.5Z'
        clipRule='evenodd'
      ></path>
    </Svg>
  );
};

export default Icon;
