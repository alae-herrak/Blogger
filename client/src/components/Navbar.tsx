import { useState } from "react";
import { UserButton, useUser } from "@clerk/clerk-react";

import OpenMenu from "../assets/open-menu.png";
import CloseMenu from "../assets/close-menu.png";
import List from "../assets/list.png";
import Plus from "../assets/plus.png";
import Eye from "../assets/eye.png";

const Navbar: React.FC = () => {
  const { user } = useUser();

  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-700 p-4 text-gray-200 transition-all">
      <div className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-between">
        <div id="logo" className="flex items-center gap-3 tracking-widest">
          <UserButton />
          {user?.fullName}
        </div>
        <button>
          <img
            src={openNav ? CloseMenu : OpenMenu}
            alt="navigation menu toggle"
            className="w-6 md:hidden"
            onClick={() => setOpenNav(!openNav)}
          />
        </button>
        <div
          className={`${
            !openNav && "hidden"
          } w-full transition-all md:block md:w-auto`}
        >
          <div className="mt-5 flex flex-col items-start space-y-5 md:mt-0 md:flex-row md:space-x-12 md:space-y-0">
            <nav className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
              <a href="/" className="flex items-center gap-2 hover:text-white">
                <img src={List} alt="" className="w-6" />
                Posts
              </a>
              <a href="/new-post" className="flex items-center gap-2 hover:text-white">
                <img src={Plus} alt="" className="w-6" />
                New post
              </a>
              <a href="" className="flex items-center gap-2 hover:text-white">
                <img src={Eye} alt="" className="w-6" />
                View blog
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
