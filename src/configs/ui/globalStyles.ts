import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* 1. Use a more-intuitive box-sizing model */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    * {
      font-family: ${({ theme }) => theme.fonts.primary};
      /* 2. Remove default margin, padding */
      margin: 0;
      padding: 0;
    }

    html {
      height: 100%;
    }

    body {
      /* 3. Add accessible line-height */
      line-height: 1.5;
      /* 4. Improve text rendering */
      -webkit-font-smoothing: antialiased;

      height: 100%;
    }

    #root {
      height: 100%;
    }

    /* 5. Improve media defaults */
    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    /* 6. Inherit fonts for form controls */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    /* 7. Avoid text overflows */
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }

    /* 8. Improve line wrapping */
    p {
      text-wrap: pretty;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-wrap: balance;
    }

    /*
      9. Create a root stacking context
    */
    #root,
    #__next {
      isolation: isolate;
    }

    button {
      outline: none;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }

    /* Style scrollbar */
    /* width */
    ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.borderHover};
      border-radius: 24px;
    }

`;
