import Logo from '../../logo/Logo';
import Sidebar from '../../sideBar/SideBar';
import { Items, UserItems } from '../navigationItems/Items';

import Profile from '../profile/Profile';
const ToolBar = ({ admin }) => {
  return (
    <div className="min-h-full">
      <Sidebar side={'left'}>
        <div className=" flex flex-col">
          {admin ? <Items /> : <UserItems />}
        </div>
      </Sidebar>
      <Sidebar side={'right'}>
        <div className=" flex flex-col">
          <Profile />
        </div>
      </Sidebar>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center sm:justify-between justify-center	">
            <div className=" flex items-center sm:justify-center">
              <Logo />
              {admin ? (
                <div className="hidden sm:block">
                  <Items hideOnMobile={true} />
                </div>
              ) : (
                <div className="hidden sm:block">
                  <UserItems hideOnMobile={true} />
                </div>
              )}
            </div>
            <div className="hidden md:flex md:flex-1 md:justify-end">
              <Profile />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ToolBar;
