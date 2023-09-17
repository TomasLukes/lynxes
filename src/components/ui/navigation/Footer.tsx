import Link from "next/link"
import Image from "next/image"
import Logo from "@/components/shared/Logo"

import FacebookIcon from "public/assets/icons/shared/socials/icon-facebook.svg"
import InstagramIcon from "public/assets/icons/shared/socials/icon-instagram.svg"
import TwitterIcon from "public/assets/icons/shared/socials/icon-twitter.svg"

const footerLinkIconsConfig = [
  {
    href: 'https://www.facebook.com/lynxes',
    imgSrc: FacebookIcon,
    alt: "See our Facebook page",
 },
 {
    href: 'https://www.instagram.com/lynxes',
    imgSrc: InstagramIcon,
    alt: "Follow us on Instagram",
  },
  {
    href: 'https://www.twitter.com/lynxes',
    imgSrc: TwitterIcon,
    alt: "Follow us on Twitter",
  },
]

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
            {
              footerLinkIconsConfig.map(item => {
                return (
                  <Link href={item.href}>
                    <Image 
                      src={item.imgSrc}
                      alt={item.alt} 
                      className="fill-light-100 hover:fill-primary-700 focus:fill-primary-700 cursor-pointer" 
                    />
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </footer>
  )
}