import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="site-header absolute w-full z-50">
      <div className="container mx-auto">
        <div className="header flex items-center justify-between p-4">
          <div className="menu-icon">
            <i
              className="fa fa-bars text-3xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
          </div>
          <div className="logo">
            <img src="./images/logo.png" className="w-full" alt="Logo" />
          </div>
          <div className="flex gap-5 items-center justify-center">
            <img src="./images/Search.png" alt="Search" />
            <img src="./images/shopping bag.png" alt="Shopping Bag" />
          </div>
        </div>
      </div>
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
}