import { ROUTES } from '@configs/app/routes';
import MainLayout from '@layouts/MainLayout';
import ProvidersTree from '@providers/ProvidersTree';
import { Navigate, Route } from 'react-router-dom';

function App() {
  return (
    <ProvidersTree>
      {ROUTES.map((route) => {
        const Layout = route.layout || MainLayout;
        const Page = route.component;

        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}

      <Route path='*' element={<Navigate to='/home' replace />} />
    </ProvidersTree>
  );
}

export default App;
