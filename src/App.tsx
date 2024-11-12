import { ROUTES } from '@configs/app/routes';
import MainLayout from '@layouts/MainLayout';
import ProvidersTree from '@providers/ProvidersTree';
import { useRootStore } from '@stores/root';
import { useEffect } from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const { isSignedIn } = useRootStore();

  useEffect(() => {
    if (!isSignedIn) {
      navigate('/login');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn]);

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
