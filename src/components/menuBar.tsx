import { Menu } from "@/models/menu";
import MainMenu from "./mainMenu";

const menuList: Menu[] = [
  { name: "Dashboard", link: "#", subMenu: [] },
  { name: "Report", link: "#", subMenu: [] },
  {
    name: "Product",
    link: "#",
    subMenu: [
      {
        name: "Product",
        link: "#",
        subMenu: [
          { name: "Add New", link: "#", subMenu: [] },
          { name: "List", link: "#", subMenu: [] },
        ],
      },
      {
        name: "Inventory",
        link: "#",
        subMenu: [],
      },
      {
        name: "Invoice",
        link: "#",
        subMenu: [],
      },
    ],
  },
  {
    name: "Business",
    link: "#",
    subMenu: [
      {
        name: "Outlet",
        link: "#",
        subMenu: [],
      },
      {
        name: "Employee",
        link: "#",
        subMenu: [
          { name: "Add New", link: "#", subMenu: [] },
          { name: "List", link: "#", subMenu: [] },
        ],
      },
      {
        name: "Shipment",
        link: "#",
        subMenu: [],
      },
      {
        name: "Marketing",
        link: "#",
        subMenu: [],
      },
    ],
  },
  { name: "Settings", link: "#", subMenu: [] },
];

const MenuBar = () => {
  return (
    <ul className="w-full">
      {menuList.map((menu: Menu, i: number) => {
        return <MainMenu key={i} menu={menu} />;
      })}
    </ul>
  );
};
export default MenuBar;
