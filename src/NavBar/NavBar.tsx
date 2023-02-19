import { NavButton } from "./NavButtons";
import "./NavBar.css";
import { NavItem, NavItems } from "./NavItems";
import zfd1 from "../assets/zfd1.png";
export const NavBar = () => {
  return (
    <div className="NavBar">
      <nav>
        {NavItems.map((item: NavItem) => {
          return <NavButton title={item.title} onClick={item.action} />;
        })}
      </nav>
      <div className="NavBarImage">
        <img alt="Logo" className="logo" src={zfd1} />
      </div>
    </div>
  );
};
