import { Fragment } from "react";
import ToolBar from "../components/navigation/toolbar/Toolbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ToolBar admin={false} />
      <Fragment>
        <Outlet />
      </Fragment>
      <Footer />
    </>
  );
};

export default Layout;
