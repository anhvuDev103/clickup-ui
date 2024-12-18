import { Svg } from './Svg';
import { SvgProps } from './types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M10.975 3.002a1 1 0 0 1-.754 1.196 8 8 0 1 0 9.58 9.58 1 1 0 1 1 1.951.443C20.742 18.675 16.76 22 12 22 6.477 22 2 17.523 2 12c0-4.76 3.325-8.742 7.779-9.752a1 1 0 0 1 1.196.754Z'
        clipRule='evenodd'
      ></path>
      <path
        fill='var(--sprint-accent-color, currentColor)'
        d='M13.025 3.002a1 1 0 0 1 1.196-.754c3.74.849 6.683 3.79 7.531 7.53a1 1 0 1 1-1.95.443 8.013 8.013 0 0 0-6.023-6.023 1 1 0 0 1-.754-1.196ZM10 9.99c0-.808.966-1.274 1.654-.8l2.917 2.011a.958.958 0 0 1 0 1.598l-2.917 2.01c-.688.475-1.654.009-1.654-.798V9.989Z'
      ></path>
    </Svg>
  );
};

export default Icon;
