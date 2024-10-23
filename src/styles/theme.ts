import { Interpolation } from 'styled-components';

type Mode = 'dark' | 'light';

export type InterpolationMapped<K extends string | number | symbol> = {
  [key in K]: Interpolation<object>;
};

export const getDesignTokens = (mode: Mode) => {
  const getColor = (lightColor: string, darkColor: string) => (mode === 'light' ? lightColor : darkColor);

  return {
    palette: {
      background: {
        main: getColor('#ffffff', ''),
        hover: getColor('#f7f8f9', ''),
        border: getColor('#f0f1f3', ''),
        content: {
          main: getColor('#2a2e34', ''),
          secondary: getColor('#656f7d', ''),
        },
      },
      surface: {
        main: getColor('#f7f8f9', ''),
        hover: getColor('#f0f1f3', ''),
        border: getColor('#f0f1f3', ''),
        content: {
          main: getColor('#4f5762', ''),
        },
      },
    },
    typography: {
      bold12: {
        fontSize: '1.2rem',
        fontWeight: '700',
      },
      semi12: {
        fontSize: '1.2rem',
        fontWeight: '600',
      },
      medium12: {
        fontSize: '1.2rem',
        fontWeight: '500',
      },
      light12: {
        fontSize: '1.2rem',
        fontWeight: '400',
      },
      bold14: {
        fontSize: '1.4rem',
        fontWeight: '700',
      },
      semi14: {
        fontSize: '1.4rem',
        fontWeight: '600',
      },
      medium14: {
        fontSize: '1.4rem',
        fontWeight: '500',
      },
      light14: {
        fontSize: '1.4rem',
        fontWeight: '400',
      },
      bold16: {
        fontSize: '1.6rem',
        fontWeight: '700',
      },
      semi16: {
        fontSize: '1.6rem',
        fontWeight: '600',
      },
      medium16: {
        fontSize: '1.6rem',
        fontWeight: '500',
      },
      light16: {
        fontSize: '1.6rem',
        fontWeight: '400',
      },
      bold20: {
        fontSize: '2rem',
        fontWeight: '700',
      },
      semi20: {
        fontSize: '2rem',
        fontWeight: '600',
      },
      medium20: {
        fontSize: '2rem',
        fontWeight: '500',
      },
      light20: {
        fontSize: '2rem',
        fontWeight: '400',
      },
      bold24: {
        fontSize: '2.4rem',
        fontWeight: '700',
      },
      semi24: {
        fontSize: '2.4rem',
        fontWeight: '600',
      },
      medium24: {
        fontSize: '2.4rem',
        fontWeight: '500',
      },
      light24: {
        fontSize: '2.4rem',
        fontWeight: '400',
      },
    },
  };
};

export type Theme = ReturnType<typeof getDesignTokens>;
