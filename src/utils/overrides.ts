const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

console.error = function (...args) {
  if (!args[0].startsWith('Warning: React does not recognize the `%s` prop on a DOM element')) {
    originalConsoleError.apply(console, args);
  }
};

console.warn = function (...args) {
  if (!args[0].startsWith('styled-components: it looks like an unknown prop')) {
    originalConsoleWarn.apply(console, args);
  }
};
