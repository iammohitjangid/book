import { NavLink } from 'react-router-dom';

const NavigationItem = ({ link, exact, children }) => {
  return (
    <NavLink
      to={link}
      exact={Boolean(exact).toString()}
      className="text-gray-300 hover:bg-gray-700 focus:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    >
      {children}
    </NavLink>
  );
};

export default NavigationItem;
