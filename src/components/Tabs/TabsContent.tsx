import useTabs from '@hooks/useTabs';

interface Props {
  value: string;
  children: React.ReactNode;
}

const TabsContent: React.FC<Props> = ({ value, children }) => {
  const { tab } = useTabs();
  console.log('>> Check | tab:', tab);

  if (tab !== value) return null;

  return <div>{children}</div>;
};

export default TabsContent;
