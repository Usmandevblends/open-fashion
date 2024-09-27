import { Link } from 'react-router-dom';

function MobileMenu({setIsMenuOpen}) {
  return (
    <div className="fixed inset-0 z-40 bg-white">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4">
          <i
            className="fa fa-times text-2xl cursor-pointer mx-5"
            onClick={() => setIsMenuOpen(false)}></i>
          <div className="flex gap-5 items-center justify-center">
            <img src="./images/Search.png" alt="Search" />
            <img src="./images/shopping bag.png" alt="Shopping Bag" />
          </div>
        </div>
        <div className="flex-grow p-6 overflow-y-auto">
          <ul className="flex items-center justify-center gap-5">
            <li>
              <Link to="/women" className="text-lg font-semibold">
                WOMEN
              </Link>
            </li>
            <li>
              <Link to="/men" className="text-lg font-semibold">
                MEN
              </Link>
            </li>
            <li>
              <Link to="/kids" className="text-lg font-semibold">
                KIDS
              </Link>
            </li>
          </ul>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span>New</span>
              <i className="fa fa-chevron-down"></i>
            </div>
            <div className="flex items-center justify-between">
              <span>Apparel</span>
              <i className="fa fa-chevron-down"></i>
            </div>
            <div className="flex items-center justify-between">
              <span>Bag</span>
              <i className="fa fa-chevron-down"></i>
            </div>
            <div className="flex items-center justify-between">
              <span>Shoes</span>
              <i className="fa fa-chevron-down"></i>
            </div>
            <div className="flex items-center justify-between">
              <span>Beauty</span>
              <i className="fa fa-chevron-down"></i>
            </div>
            <div className="flex items-center justify-between">
              <span>Accessories</span>
              <i className="fa fa-chevron-down"></i>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center">
              <i className="fa fa-phone"></i>
              <span className="ml-2">(786) 713-8616</span>
            </div>
            <div className="flex items-center mt-4">
              <i className="fa fa-map-marker"></i>
              <span className="ml-2">Store Locator</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;