import "./MenuLinks.css";

import searchicon from "../../images/icons/Search.png";
import profileIcon from "../../images/icons/Person.png";
import cartIcon from "../../images/icons/local_shipping.png";
import { Link } from "react-router-dom";

interface MenuLinksInterface {
  openedMenu: boolean;
  onClose: React.MouseEventHandler<HTMLLIElement>;
  onCartOpen: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const MenuLinks = ({ openedMenu, onClose, onCartOpen }: MenuLinksInterface) => {
  return (
    <div
      className="nav-menu__links"
      style={openedMenu ? {} : { transform: "translateX(100%)" }}
    >
      <div className="actions">
        <div className="icon">
          <img src={searchicon} alt="Search Icon" />
        </div>
        <div className="icon">
          <img src={profileIcon} alt="Profile Icon" />
        </div>
        <div onClick={onCartOpen} className="icon">
          <img src={cartIcon} alt="Cart Icon" />
        </div>
      </div>
      <ul className="links">
        <li onClick={onClose}>
          <Link to="/collections">
            <p className="link">tea collections</p>
          </Link>
        </li>
        <li>
          <p className="link">accessories</p>
        </li>
        <li>
          <p className="link">blog</p>
        </li>
        <li>
          <p className="link">contact us</p>
        </li>
      </ul>
    </div>
  );
};

export default MenuLinks;
