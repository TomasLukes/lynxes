import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InstagramIcon from 'public/assets/icons/shared/socials/icon-instagram.svg';
import TwitterIcon from 'public/assets/icons/shared/socials/icon-twitter.svg';

import Logo from '@/components/shared/Logo';

import FacebookIcon from '../icons/socials/FacebookIcon';

const footerLinkIconsConfig = [
  {
    href: 'https://www.facebook.com/lynxes',
    imgSrc: './assets/icons/shared/socials/icon-facebook.svg',
    alt: 'See our Facebook page',
    icon: FacebookIcon,
  },
  {
    href: 'https://www.instagram.com/lynxes',
    imgSrc: InstagramIcon,
    alt: 'Follow us on Instagram',
    icon: FacebookIcon,
  },
  {
    href: 'https://www.twitter.com/lynxes',
    imgSrc: TwitterIcon,
    alt: 'Follow us on Twitter',
    icon: FacebookIcon,
  },
];

const Footer = (): ReactElement => (
  <footer className='relative w-full bg-dark-850 text-neutral-100'>
    {/* Footer container */}
    <div className='footer-container container mx-auto grid px-6 py-9 md:px-9 lg:px-6'>
      {/* Decorative span */}
      <span
        className='absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 transform 
          bg-primary-700 md:left-auto md:translate-x-0 md:transform-none'
      ></span>
      {/* Logo + Nav container*/}
      <div className='mx-auto flex flex-col gap-9 md:mx-0 lg:flex-row lg:justify-between'>
        {/* Logo */}
        <div className='flex w-24 items-center justify-center'>
          <Logo />
        </div>
        {/* Nav items */}
        <nav className=''>
          <ul
            className='subtitle flex list-none flex-col gap-4 text-center uppercase md:flex-row
            md:gap-6 md:text-left'
          >
            <li className='hover:text-primary-700'>
              <Link href='/'>Home</Link>
            </li>
            <li className='hover:text-primary-700'>
              <Link href='/category/earphones'>Earphones</Link>
            </li>
            <li className='hover:text-primary-700'>
              <Link href='/category/headphones'>Headphones</Link>
            </li>
            <li className='hover:text-primary-700'>
              <Link href='/category/speakers'>Speakers</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Description text */}
      <p className='text-body mx-auto max-w-prose py-12 text-center font-normal opacity-50 md:m-0 md:py-9 md:text-left lg:w-1/3'>
        {`Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted 
          to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.`}
      </p>
      {/* Copyright + socials container */}
      <div className='flex flex-col-reverse items-center md:flex-row md:justify-between'>
        <Link href={'http://tomaslukes.com/'}>
          <p className='text-body text-light-100'>
            <span className='opacity-100'>Created by </span>
            <span className='opacity-100 hover:text-primary-700 hover:opacity-100'>
              Tomas Lukes
            </span>
            <span className='opacity-100'> © 2023</span>
          </p>
        </Link>
        {/* Social icons */}
        <div className='flex items-center gap-3 py-3 md:gap-4'>
          {footerLinkIconsConfig.map((item, index) => {
            const IconComponent = item.icon; // Get the icon component for the current item
            return (
              <Link key={index} href={item.href}>
                <IconComponent className='cursor-pointer fill-red-500 hover:fill-primary-700 focus:fill-primary-700' />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
