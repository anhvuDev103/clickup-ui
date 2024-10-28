import useModal from '@hooks/useModal';
import { Button } from '@uikit';

const Home = () => {
  const { open } = useModal();
  return (
    <div>
      <Button onClick={() => open('CreateItems', { ahihi: 'sad' })}>Click me</Button>
    </div>
  );
};

export default Home;
