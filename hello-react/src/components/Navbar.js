import ihLogo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

function Navbar() {
  return (
    <nav className="nav-menu">
      <img src={ihLogo} alt="ironhack logo" />
      <img className="menu-icon" src={menu} alt="menu" />
    </nav>
  );
}

export default Navbar;
