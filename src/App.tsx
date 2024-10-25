import { ROUTES } from '@configs/app/routes';
import MainLayout from '@layouts/MainLayout';
import StyleProvider from '@providers/StyleProvider';
import { AppFrame } from '@styles';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <StyleProvider>
      <AppFrame>
        <Routes>
          {ROUTES.map((route) => {
            const Page = route.component;

            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <MainLayout>
                    <Page />
                  </MainLayout>
                }
              />
            );
          })}
        </Routes>
      </AppFrame>
    </StyleProvider>
  );
}

export default App;
