import { Drawer } from 'antd';
import React, { useState } from 'react';
const SideBar = ({ side, children }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div>
      <button
        onClick={toggleDrawer}
        className={`sm:hidden absolute top-4 ${side}-5 bg-600 text-white p-2 shadow-md ring-offset-white`}
      >
        <svg
          className="h-5 w-6"
          fill="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <Drawer
        closable={false}
        visible={showDrawer}
        placement={side}
        onClose={toggleDrawer}
        width="45%"
      >
        {children}
      </Drawer>
    </div>
  );
};

export default SideBar;
