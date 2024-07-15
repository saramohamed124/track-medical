import Links from "./components/Links";
import ListLinks from "./components/ListLinks";
import { Logo } from "./components/Logo";

function Navbar() {
    return (
        <div className="navbar bg-base-100 flex justify-between">
          <div className="navbar-center hidden lg:flex">
            <Links/>
          </div>
          <div className="navbar-end flex justify-between w-full">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ListLinks/>
            </div>
        <Logo/>
          </div>
</div>
);
}

export default Navbar;