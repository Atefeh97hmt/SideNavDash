"use client";

import { Menu } from "@/models/menu";
import { useState } from "react";
import SubMenu from "./subMenu";
import Link from "next/link";

const MainMenu = ({ menu }: { menu: Menu }) => {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <li className="my-2">
      {menu.subMenu.length != 0 && (
        <>
          <a
            onClick={() => setSubMenu(!subMenu)}
            className="px-3 py-2 bg-primary text-white font-medium rounded-lg flex w-full cursor-pointer shadow justify-between items-center"
          >
            {menu.name}
            <svg
              width="549"
              height="549"
              viewBox="0 0 549 549"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-3 h-3 fill-white transition-all ${
                subMenu ? "rotate-180" : "rotate-0"
              }`}
            >
              <path d="M1.30957 169.97L273.55 444.58L546.78 169.97L481.57 103.51L273.55 321.7L62.7596 111.03L1.30957 169.97Z" />
            </svg>
          </a>
          <div className={subMenu ? "block" : "hidden"}>
            <SubMenu sMenu={menu.subMenu} />
          </div>
        </>
      )}
      {menu.subMenu.length == 0 && (
        <Link
          href={menu.link}
          className="px-3 py-2 bg-primary text-white font-medium rounded-lg flex w-full cursor-pointer shadow"
        >
          {menu.name}
        </Link>
      )}
    </li>
  );
};

export default MainMenu;
