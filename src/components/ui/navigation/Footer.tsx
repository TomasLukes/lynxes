import Link from "next/link"
import Logo from "@/components/shared/Logo"

export default function Footer() {
  return (
    /* Footer */
    <footer className="relative w-full bg-dark-850 text-neutral-100">
      {/* Footer container */}
      <div className="footer-container container mx-auto grid py-9 px-6 md:px-9 lg:px-6">
        {/* Decorative span */}
        <span className="absolute left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 md:translate-x-0 
          top-0 w-24 h-1 bg-primary-700">
        </span>
        {/* Logo + Nav container*/}
        <div className="flex flex-col lg:flex-row lg:justify-between mx-auto md:mx-0 gap-9">
          {/* Logo */}
          <div className="flex items-center justify-center w-24">
            <Logo />
          </div>
          {/* Nav items */}
          <nav className="">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left list-none
            subtitle uppercase">
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
            </ul>
          </nav>
        </div>
        {/* Description text */}
        <p className="max-w-prose lg:w-1/3 mx-auto md:m-0 text-center md:text-left py-12 md:py-9 text-body font-normal opacity-50">
          {`Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted 
          to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.`}
        </p>
        {/* Copyright + socials container */}
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
          <Link href={'http://tomaslukes.com/'}>
            <p className="text-body text-light-100">
              <span className="opacity-100">Created by </span>
              <span className="opacity-100 hover:opacity-100 hover:text-primary-700">Tomas Lukes</span>
              <span className="opacity-100"> © 2023</span>
            </p>
          </Link>
          {/* Social icons */}
          <div className="flex items-center gap-3 md:gap-4 py-3">
            {/* FB icon */}
            <Link href='https://www.facebook.com/lynxes'>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="fill-light-100 
                hover:fill-primary-700 focus:fill-primary-700 cursor-pointer">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" 
                />
              </svg>
            </Link>
            {/* IG icon */}
            <Link href='https://www.instagram.com/lynxes'>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="fill-light-100
              hover:fill-primary-700 focus:fill-primary-700 cursor-pointer">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" 
                />
              </svg>
            </Link>
            {/* Twitter icon */}
            <Link href='https://www.twitter.com/lynxes'>
              <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg" className="fill-light-100
              hover:fill-primary-700 focus:fill-primary-700 cursor-pointer">
                <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}