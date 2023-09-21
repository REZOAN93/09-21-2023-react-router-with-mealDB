import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="navbar bg-red-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <a className="normal-case text-3xl font-bold">MealDB</a>
        </div>
        <div className="navbar-center hidden lg:flex gap-10 text-xl font-bold text-white">
          {/* <NavLink to={"/"}>Category</NavLink> */}
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/"}>Shop</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/more"}>More</NavLink>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
