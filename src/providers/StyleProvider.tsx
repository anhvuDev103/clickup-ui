import { GlobalStyles } from '@configs/ui/globalStyles';
import { getDesignTokens } from '@configs/ui/tokens';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyleProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={getDesignTokens('light')}>
      <GlobalStyles />

      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
