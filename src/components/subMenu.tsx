import { Menu } from "@/models/menu";
import Link from "next/link";
import { useState } from "react";

const SubMenu = ({ sMenu }: { sMenu: Menu[] }) => {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <ul className="ml-6">
      {sMenu.map((m: Menu, i: number) => {
        return (
          <li key={i} className="my-3">
            {m.subMenu.length != 0 && (
              <>
                <a
                  onClick={() => setSubMenu(!subMenu)}
                  className="text-darkGray bg-white font-medium flex px-3 py-2 rounded-lg cursor-pointer shadow justify-between items-center"
                >
                  {m.name}
                  <svg
                    width="549"
                    height="549"
                    viewBox="0 0 549 549"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-3 h-3 fill-darkGray transition-all ${
                      subMenu ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path d="M1.30957 169.97L273.55 444.58L546.78 169.97L481.57 103.51L273.55 321.7L62.7596 111.03L1.30957 169.97Z" />
                  </svg>
                </a>
                <div className={subMenu ? "block" : "hidden"}>
                  <SubMenu sMenu={m.subMenu} />
                </div>
              </>
            )}
            {m.subMenu.length == 0 && (
              <>
                <Link
                  href={m.link}
                  className="text-darkGray bg-white font-medium flex px-3 py-2 rounded-lg cursor-pointer shadow"
                >
                  {m.name}
                </Link>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
