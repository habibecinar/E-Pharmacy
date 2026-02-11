import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './ClientLayout.css';

const ClientLayout = () => {
  return (
    <div className="client-layout">
      <Header />
      <main className="client-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
