import useTabs from '@hooks/useTabs';
import { Flex } from '@uikit';
import { FlexProps } from '@uikit/types';

interface Props extends FlexProps {
  value: string;
  children: React.ReactNode;
}

const TabsTrigger: React.FC<Props> = ({ value, children, ...props }) => {
  const { tab, activateTab } = useTabs();
  return (
    <Flex
      height='100%'
      borderBottom='2px solid'
      borderBottomColor={tab === value ? 'borderPrimary' : 'transparent'}
      onClick={activateTab(value)}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default TabsTrigger;
