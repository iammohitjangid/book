import Logo from "../../logo/Logo";
import Sidebar from "../../sideBar/SideBar";
import { Items, UserItems } from "../navigationItems/Items";

import Profile from "../profile/Profile";
const ToolBar = ({ admin }) => {
  return (
    <div className="min-h-full">
      <Sidebar />
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Logo />
              {admin ? (
                <Items hideOnMobile={true} />
              ) : (
                <UserItems hideOnMobile={true} />
              )}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Profile />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ToolBar;
