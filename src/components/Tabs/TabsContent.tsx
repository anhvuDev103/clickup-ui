import useTabs from '@hooks/useTabs';

interface Props {
  value: string;
  component: React.ReactNode;
}

const TabsContent: React.FC<Props> = ({ value, component }) => {
  const { tab } = useTabs();

  if (tab !== value) return null;

  return component;
};

export default TabsContent;
