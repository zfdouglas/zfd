import { NavButton } from "./NavButtons";
import "./NavBar.css";
import { NavItem, NavItems } from "./NavItems";
import zfd1 from "../assets/zfd1.png";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className="NavBar">
      <nav>
        {NavItems.map((item: NavItem) => {
          return <NavButton title={item.title} url={item.url} />;
        })}
      </nav>
      <div className="NavBarImage">
        <Link to={"/"}>
          <img alt="Logo" className="logo" src={zfd1} />
        </Link>
      </div>
    </div>
  );
};
