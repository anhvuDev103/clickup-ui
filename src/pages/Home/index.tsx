import useModal from '@hooks/useModal';
import Page from '@layouts/components/Page';
import { Button, Flex, Separator, Text } from '@uikit';
import { HomeIcon, SettingsIcon } from '@uikit/icons';

const Home = () => {
  const { open } = useModal();
  return (
    <Page
      heading={
        <Flex>
          <Flex gap={1} px={2}>
            <HomeIcon width={16} height={16} />
            <Text variant='regular14'>Home</Text>
          </Flex>
          <Flex>
            <Button>Manage cards</Button>
            <Separator />
            <Button variant='text' square>
              <SettingsIcon width={16} height={16} />
            </Button>
          </Flex>
        </Flex>
      }
    >
      <Button onClick={() => open('CreateItems', { ahihi: 'sad' })}>Click me</Button>
    </Page>
  );
};

export default Home;
