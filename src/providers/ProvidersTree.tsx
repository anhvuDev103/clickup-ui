import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes } from 'react-router-dom';

import AppDataProvider from './AppDataProvider';
import ModalProvider from './ModalProvider';
import SharedServicesProvider from './SharedServicesProvider';
import StyleProvider from './StyleProvider';

const queryClient = new QueryClient();

type ProvidersType = [React.ElementType, Record<string, unknown>?];
type ChildrenType = {
  children: React.ReactNode;
};

const buildProvidersTree = (componentsWithProps: Array<ProvidersType>) => {
  const initialComponent = ({ children }: ChildrenType) => <>{children}</>;

  return componentsWithProps.reduce(
    (AccumulatedComponents: React.ElementType, [Provider, props = {}]: ProvidersType) => {
      return ({ children }: ChildrenType) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent,
  );
};

const ProvidersTree = buildProvidersTree([
  [
    QueryClientProvider,
    {
      client: queryClient,
    },
  ],
  [StyleProvider],
  [SharedServicesProvider],
  [AppDataProvider],
  [ModalProvider],
  [Routes],
]);

export default ProvidersTree;
