import Items from '../navigation/navigationItems/Items';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <p className="text-sm">&copy; 2024 Book Emporium. All rights reserved.</p>
      <Items />
    </div>
  </footer>
);

export default Footer;
