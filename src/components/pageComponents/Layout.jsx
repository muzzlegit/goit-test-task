import { Outlet } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header';
import NavBar from '../NavBar';

const Layout = () => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <main>
        <Outlet />
        <ToastContainer transition={Zoom} />
      </main>
    </>
  );
};

export default Layout;
