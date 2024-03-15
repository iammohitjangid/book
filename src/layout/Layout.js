import { Fragment } from 'react';
import ToolBar from '../components/navigation/toolbar/Toolbar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Admin/Home/AdminHome';

const Layout = () => {
  return (
    <>
      <ToolBar admin={true} />
      <Fragment>
        <Home />
        <Outlet />
      </Fragment>
      <Footer />
    </>
  );
};

export default Layout;
