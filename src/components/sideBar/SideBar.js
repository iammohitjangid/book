import { Drawer } from 'antd';
import React, { useState } from 'react';
import Items from '../navigation/navigationItems/Items';

const SideBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div>
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={toggleDrawer}
        className="lg:hidden absolute top-3 right-5 bg-blue-500 text-white rounded-full p-2 shadow-md"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <Drawer
        closable={false}
        visible={showDrawer}
        placement="left"
        onClose={toggleDrawer}
      >
        <div className="p-4">
          <Items hideOnMobile={false} />
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;
