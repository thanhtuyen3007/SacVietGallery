import clsx from "clsx";
import { Link } from "react-router";

interface MenuSideBarProps {
  isOpen: boolean;
  onClose: () => void;
}
export const MenuSideBar = ({ isOpen, onClose }: MenuSideBarProps) => {
  const listMenu = [
    { name: "Home", link: "/" },
    { name: "Collections", link: "/collections" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    isOpen && (
      <div
        className={clsx(
          "menu-sideBar h-screen bg-bg-primary lg:flex"
        )}
      >
        <div className="list-item-menu sm:flex-1 ml-50 lg:ml-100">
          {listMenu.map((item, index) => (
            <Link
              onClick={() => onClose()}
              key={index}
              to={item.link}
              className="menu-item-sideBar block font-h1 mb-80 hover:text-t-hover-gray uppercase hover:cursor-pointer "
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="info-sideBar md:flex-1">
          <p className="hidden lg:block info-text-sideBar mr-100 text-t-gray text-base">
            SacViet Gallery was founded with the mission of honoring and
            promoting the values of Vietnamese art. We showcase remarkable
            paintings that bring the cultural essence of Vietnam closer to the
            world.
          </p>
          <ul className="social-list-sideBar text-t-gray text-base mt-160 ml-50 lg:ml-0">
            <li className="mb-30">SacViet Gallery</li>
            <li className="mb-10">Phone: +84 123 456 789</li>
            <li className="mb-10">Email: SacvietGallery@gmail.com</li>
            <li className="mb-10">Address: 123 Tran Ba Giao street, HCM</li>
          </ul>
        </div>
      </div>
    )
  );
};
