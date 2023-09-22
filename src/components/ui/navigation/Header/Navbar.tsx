'use client';
import { ReactElement, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/components/shared/Logo';
import Cart from '@/components/ui/navigation/Header/Cart';
import MobileMenu from '@/components/ui/navigation/Header/MobileMenu';
import { AuthContextType, useAuthContext } from '@/context/AuthContext';
import { useCartContext } from '@/context/CartContext';

import GuestIcon from './GuestIcon';
import NavItems from './NavItems';
import UserIcon from './UserIcon';

const Navbar = (): ReactElement => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const user = null;
  const cartQ = 0;

  /*   
  const { user } = useAuthContext() as AuthContextType;
  const { cartQ } = useCartContext(); 
*/

  const handleClick = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleOpenCart = (): void => {
    setMobileMenuOpen(false);
    setCartOpen(!cartOpen);
  };

  return (
    <header className='relative w-full bg-dark-850 text-neutral-100'>
      <div
        id='navbar-desktop'
        className='max-width container mx-auto flex items-center justify-between border-b border-white border-opacity-10 px-6 py-6 md:px-9
        md:py-6 lg:px-6 lg:py-12'
      >
        <Image
          src={`/assets/icons/shared/menu/i con-menu-${
            mobileMenuOpen ? 'close' : 'hamburger'
          }.svg`}
          alt='Mobile menu toggle button'
          width={50}
          height={50}
          className='w-8 md:w-10 lg:hidden'
          onClick={(): void => handleClick()}
        />
        <div className='mr-auto pl-6 md:pl-9 lg:mr-0 lg:pl-0'>
          <Logo />
        </div>
        <NavItems className='subtitle hidden list-none gap-9 uppercase lg:flex' />
        <div className='flex items-center gap-3 md:gap-4'>
          {user ? <UserIcon /> : <GuestIcon />}
          <div className='relative'>
            <div className='absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 p-2 text-center'>
              <span className='text-xs'>{cartQ}</span>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='28'
              viewBox='0 -960 960 960'
              width='28'
              className='cursor-pointer
            fill-light-100 hover:fill-primary-700 focus:fill-primary-700'
              onClick={(): void => handleOpenCart()}
            >
              <path d='M284.525-80.667q-30.858 0-52.691-21.975Q210-124.616 210-155.475q0-30.858 21.975-52.691Q253.95-230 284.808-230q30.859 0 52.692 21.975t21.833 52.833q0 30.859-21.975 52.692-21.974 21.833-52.833 21.833Zm400 0q-30.858 0-52.691-21.975Q610-124.616 610-155.475q0-30.858 21.975-52.691Q653.95-230 684.808-230q30.859 0 52.692 21.975t21.833 52.833q0 30.859-21.975 52.692-21.974 21.833-52.833 21.833ZM206-800.667h589.382q22.976 0 34.964 20.834Q842.333-759 830.667-738L693.333-490.667q-11 19.333-28.872 30.667-17.873 11.333-39.128 11.333H324l-52 96.001h487.333V-286H278q-43 0-63-31.833T214.667-386l60.667-111.333L126-813.334H47.334V-880h121.333L206-800.667Z' />
            </svg>
          </div>
        </div>
      </div>

      {/* Navbar mobile */}
      <nav
        className={`${
          !mobileMenuOpen && 'hidden'
        } absolute z-50 w-full list-none flex-col gap-8 rounded-b-lg bg-light-300 text-center text-dark-800
        lg:hidden`}
      >
        <MobileMenu handleClick={handleClick} />
      </nav>

      {cartOpen && (
        <div className='max-width relative mx-auto'>
          <div
            className='absolute z-50 w-full
          rounded-b-lg'
          >
            <Cart handleOpenCart={handleOpenCart} />
          </div>
          <div className='fixed inset-0 z-20 bg-dark-900 opacity-30'></div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
