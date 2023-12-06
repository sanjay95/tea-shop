import "./Navbar.css";
import logo from "../../images/icons/logo.png";
import searchicon from "../../images/icons/Search.png";
import profileIcon from "../../images/icons/Person.png";
import cartIcon from "../../images/icons/local_shipping.png";
import MenuBurger from "./MenuBurger";
import { useContext, useState } from "react";
import MenuLinks from "./MenuLinks";
import { Link } from "react-router-dom";
import { MyContext } from "../../API/Context";

const Navbar = () => {
  const [openedMenu, setOpenedMenu] = useState(true);

  const menuOpenHandler = () => {
    setOpenedMenu(!openedMenu);
  };

  const ctx = useContext(MyContext);

  return (
    <nav>
      <div className="nav-logo">
        <img className="nav-logo__icon" src={logo} />
        <h1 className="nav-logo__name">
          <Link to="/">Mystic Chai Co.</Link>
        </h1>
      </div>
      <div className="links-wrapper">
        <ul className="nav-links">
          <li>
            <Link to="/collections" className="link">
              <p>tea collections</p>
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
      <MenuBurger openedMenu={openedMenu} setOpenedMenu={menuOpenHandler} />
      <MenuLinks
        onClose={menuOpenHandler}
        onCartOpen={() => ctx?.cartOpenHandler()}
        openedMenu={openedMenu}
      />
      <div className="nav-actions">
        <div className="icon">
          <img src={searchicon} />
        </div>
        <div className="icon">
          <Link to="/login">
            <img src={profileIcon} />
          </Link>
        </div>
        <div onClick={() => ctx?.cartOpenHandler()} className="icon">
          <img src={cartIcon} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
