import { getDesignTokens } from '@styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return <ThemeProvider theme={getDesignTokens('light')}>App</ThemeProvider>;
}

export default App;
