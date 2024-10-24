import { GlobalStyles } from '@configs/ui/globalStyles';
import { getDesignTokens } from '@configs/ui/tokens';
import DefaultLayout from '@layouts/DefaultLayout';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={getDesignTokens('light')}>
      <GlobalStyles />
      <DefaultLayout />
    </ThemeProvider>
  );
}

export default App;
