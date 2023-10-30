import { ReactElement } from "react";
import Link from "next/link";

import Logo from "@/components/shared/Logo";

import NavItems from "./Header/NavItems";
import SocialIcons from "./Header/SocialIcons";

const Footer = (): ReactElement => (
  <footer className="relative w-full bg-dark-850 text-neutral-100">
    <div className="footer-container container mx-auto grid px-6 py-9 md:px-9 lg:px-6">
      <span
        className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 transform 
          bg-primary-700 md:left-auto md:translate-x-0 md:transform-none"
      ></span>
      <div className="mx-auto flex flex-col gap-9 md:mx-0 lg:flex-row lg:justify-between">
        <div className="flex w-24 items-center justify-center">
          <Logo />
        </div>
        <NavItems
          className="subtitle flex list-none flex-col gap-4 text-center uppercase md:flex-row
            md:gap-6 md:text-left"
        />
      </div>
      <p className="text-body mx-auto max-w-prose py-12 text-center font-normal opacity-50 md:m-0 md:py-9 md:text-left lg:w-1/3">
        {`Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted 
          to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.`}
      </p>
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
        <Link href={"http://tomaslukes.com/"}>
          <p className="text-body text-light-100">
            <span className="opacity-100">Created by </span>
            <span className="opacity-100 hover:text-primary-700 hover:opacity-100">
              Tomas Lukes
            </span>
            <span className="opacity-100"> © 2023</span>
          </p>
        </Link>
        <SocialIcons className="flex items-center gap-3 py-3 md:gap-4" />
      </div>
    </div>
  </footer>
);

export default Footer;
