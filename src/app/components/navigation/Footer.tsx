import Link from "next/link"

export default function Footer() {
  return (
    /* Footer */
    <footer className="relative w-full bg-dark-850 text-neutral-100">
      {/* Footer container */}
      <div className="footer-container container mx-auto grid py-9 px-6 ">
        {/* Decorative span */}
        <span className="absolute left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 md:translate-x-0 
          top-0 w-24 h-1 bg-primary-700">
        </span>
        {/* Logo + Nav container*/}
        <div className="flex flex-col lg:flex-row lg:justify-between mx-auto md:mx-0 gap-9">
          {/* Logo */}
          <h1 className="text-3xl font-bold">
            Lynxes
          </h1>
          {/* Nav items */}
          <nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left list-none
            subtitle">
            <li className="hover:text-primary-700">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="hover:text-primary-700">
              <Link href="/category/earphones">
                Earphones
              </Link>
            </li>
            <li className="hover:text-primary-700">
              <Link href="/category/headphones">
                Headphones
              </Link>
            </li>
            <li className="hover:text-primary-700">
              <Link href="/category/speakers">
                Speakers
              </Link>
            </li>
          </nav>
        </div>
        {/* Description text */}
        <p className="md:w-1/3 mx-auto md:m-0 text-center md:text-left py-12 md:py-9 text-body font-normal opacity-50">
          {`Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted 
          to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.`}
        </p>
        {/* Copyright + socials container */}
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
          <p className="text-body opacity-50">
            Copyright 2023. All Rights Reserved
          </p>
          {/* Social icons */}
          <div className="flex gap-3 py-3">
            <img src="/icons/shared/socials/icon-facebook.svg" alt="" />
            <img src="/icons/shared/socials/icon-instagram.svg" alt="" />
            <img src="/icons/shared/socials/icon-twitter.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}