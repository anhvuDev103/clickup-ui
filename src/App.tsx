import { ROUTES } from '@configs/app/routes';
import MainLayout from '@layouts/MainLayout';
import StyleProvider from '@providers/StyleProvider';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <StyleProvider>
      <>
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

          <Route path='*' element={<Navigate to='/home' replace />} />
        </Routes>
      </>
    </StyleProvider>
  );
}

export default App;
