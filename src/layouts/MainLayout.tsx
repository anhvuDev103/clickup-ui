import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { MainLayoutFrame } from './styles';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <MainLayoutFrame>
      <Header />
      <div className='MainLayout_content'>
        <Sidebar />
        {children}
      </div>
    </MainLayoutFrame>
  );
};

export default MainLayout;
