import { ReactElement } from "react";
import Link from "next/link";

import { IClassName } from "@/types/global";

const NavItemsConfig = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Earphones",
    href: "/category/earphones",
  },
  {
    name: "Headphones",
    href: "/category/headphones",
  },
  {
    name: "Speakers",
    href: "/category/speakers",
  },
];

const NavItems = ({ className }: IClassName): ReactElement => {
  return (
    <nav>
      <ul className={className}>
        {NavItemsConfig.map((item) => {
          return (
            <li key={item.name} className="hover:text-primary-700">
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavItems;
