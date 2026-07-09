import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Pasta from './pasta';
import Offers from './Offers';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeMenu = () => {
    setIsCollapsed(true);
  };
  return (
    <nav className="navbar bg-base-100" style={{ backgroundColor: "#fbb714" }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Shelter" className="w-16" />
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
              onClick={toggleCollapse}
              aria-controls="logo-navbar-collapse"
              aria-label="Toggle navigation"
            >
              <span
                className={`icon-[tabler--menu-2] ${
                  !isCollapsed ? "hidden" : "block"
                } size-4`}
              />
              <span
                className={`icon-[tabler--x] ${
                  isCollapsed ? "hidden" : "block"
                } size-4`}
              />
            </button>
          </div>
        </div>
        <div
          id="logo-navbar-collapse"
          className={`md:flex  ${
            isCollapsed ? "hidden" : "block"
          } grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full justify-end`}
        >
          <ul
            className="menu md:menu-horizontal  gap-6 p-0 text-base-content max-md:mt-22 font-bold font-title text-xl space-y-0 md:space-y-0"
            style={{ backgroundColor: "#fbb714" }}
          >
            <li className="text-black">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            {/* <li className="text-black">
              <Link to="/menu" onClick={closeMenu}>
                Menu
              </Link>
            </li> */}
            <li className="text-black">
              <Link to="/Pasta" onClick={closeMenu}>
                Menu
              </Link>
            </li>
            {/* <li className="text-black">
              <Link to="/Offers" onClick={closeMenu}>
                Offers
              </Link>
            </li> */}
{/* first branch */}
            {/* <li className="text-black  group">
  <button className="font-bold">
    <h1 className=" ">
                First branch{": "}
              </h1>
          <p className="text-base-content  font-title text-black text-sm">
            behind the university Stadium<br />
            </p>
  </button>

  <ul className="relative left-0 mt-2 hidden group-hover:block bg-white shadow-lg p-2 rounded-lg w-48 z-50">
    <li>
      <Link
        to="/pasta"
        className="block px-3 py-2 hover:bg-gray-100"
        onClick={closeMenu}
      >
        pasta
      </Link>
    </li>
    <li>
      <Link
        to="/pizza"
        className="block px-3 py-2 hover:bg-gray-100"
        onClick={closeMenu}
      >
        pizza
      </Link>
    </li>
    <li>
      <Link
        to="/Prost"
        className="block px-3 py-2 hover:bg-gray-100"
        onClick={closeMenu}
      >
       Prost
      </Link>
    </li>
  </ul>
</li> */}





            {/* <li className="text-black">
              <Link to="/" onClick={closeMenu}>
                <aside className="">
        <h1 className=" ">
                First branch{" "}
              </h1>
          <p className="text-base-content  font-title text-black text-sm">
            behind the university Stadium<br />
          </p>
        </aside>
              </Link>
            </li> */}




            {/* second branch */}
{/* <li className="text-black relative group">
  <button className="font-bold">
    <h1 className="whitespace-nowrap">
                second branch{": "}
              </h1>
          <p className="text-base-content  font-title text-black text-sm whitespace-nowrap">
            The lower walkway near Villa Ghaith<br />
            </p>
  </button>

  <ul className="relative left-0 mt-2 hidden group-hover:block bg-white shadow-lg p-2 rounded-lg w-48 z-50">
    <li>
      <Link
        to="/pasta"
        className="block px-3 py-2 hover:bg-gray-100"
        onClick={closeMenu}
      >
        pasta
      </Link>
    </li>
    <li>
      <Link
        to="/pizza"
        className="block px-3 py-2 hover:bg-gray-100"
        onClick={closeMenu}
      >
        pizza
      </Link>
    </li>
    <li>
      <Link
        to="/Prost"
        className="block px-3 py-2 hover:bg-gray-100"
        onClick={closeMenu}
      >
       Prost
      </Link>
    </li>
  </ul>
</li> */}
        

            {/* <li className="text-black">
              <a href="/">Home</a>
            </li>
            <li className="text-black">
              <a href="/menu">Menu</a>
            </li> */}

            <li className="text-black">
              <a href="tel:17574">17574</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
