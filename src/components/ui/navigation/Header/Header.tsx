'use client';
import Link from "next/link"
import Image from "next/image";
import Logo from "@/components/shared/Logo";
import UserIcon from "./UserIcon";
import GuestIcon from "./GuestIcon";
import Cart from "@/components/ui/navigation/Header/Cart";
import MobileMenu from "@/components/ui/navigation/Header/MobileMenu";
import { useState } from "react"
import { AuthContextType, useAuthContext } from "@/context/AuthContext";
import { useCartContext } from "@/context/CartContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const { user } = useAuthContext() as AuthContextType;
  const { cartQ } = useCartContext();

  function handleClick() {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  function handleOpenCart() {
    setMobileMenuOpen(false)
    setCartOpen(!cartOpen)
  }

  return (
    /* Header */
    <header className="relative w-full bg-dark-850 text-neutral-100">
      {/* Header container */}
      <div id="navbar-desktop" className="container max-width mx-auto flex items-center justify-between py-6 md:py-6 lg:py-12 px-6 md:px-9 lg:px-6
        border-b border-white border-opacity-10">
        {/* Mobile menu */}
        <Image
          src={`/assets/icons/shared/menu/icon-menu-${mobileMenuOpen ? 'close' : 'hamburger' }.svg`}
          alt="Mobile menu toggle button"
          width={50}
          height={50}
          className="lg:hidden w-8 md:w-10" 
          onClick={() => handleClick() }
        />
        {/* Logo */}
        <div className="mr-auto lg:mr-0 pl-6 md:pl-9 lg:pl-0">
          <Logo />
        </div>
        {/* Navbar items desktop */}
        <nav className="">
          <ul className="hidden lg:flex gap-9 list-none
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
        {/* Account + Shopping card icons */}
        <div className="flex gap-3 md:gap-4 items-center">
          {/* User account icon */}
          {user ? 
            <UserIcon /> : 
            <GuestIcon />
          }
          {/* Shopping icon */}
          <div className="relative">
            <div className="absolute -top-1 -right-1 flex items-center justify-center text-center bg-red-500 w-3 h-3 p-2 rounded-full">
              <span className="text-xs">
                {cartQ}
              </span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" className="fill-light-100
            hover:fill-primary-700 focus:fill-primary-700 cursor-pointer"
            onClick={() => handleOpenCart() }>
              <path d="M284.525-80.667q-30.858 0-52.691-21.975Q210-124.616 210-155.475q0-30.858 21.975-52.691Q253.95-230 284.808-230q30.859 0 52.692 21.975t21.833 52.833q0 30.859-21.975 52.692-21.974 21.833-52.833 21.833Zm400 0q-30.858 0-52.691-21.975Q610-124.616 610-155.475q0-30.858 21.975-52.691Q653.95-230 684.808-230q30.859 0 52.692 21.975t21.833 52.833q0 30.859-21.975 52.692-21.974 21.833-52.833 21.833ZM206-800.667h589.382q22.976 0 34.964 20.834Q842.333-759 830.667-738L693.333-490.667q-11 19.333-28.872 30.667-17.873 11.333-39.128 11.333H324l-52 96.001h487.333V-286H278q-43 0-63-31.833T214.667-386l60.667-111.333L126-813.334H47.334V-880h121.333L206-800.667Z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Navbar mobile */}
      <nav className={`${!mobileMenuOpen && 'hidden'} absolute z-50 lg:hidden w-full flex-col gap-8 bg-light-300 text-dark-800 text-center list-none
        rounded-b-lg`}>
        <MobileMenu handleClick={handleClick} />
      </nav>
      
      {/* Cart modal */}
      {cartOpen &&
      <div className="relative max-width mx-auto">
          <div className="absolute z-50 w-full
          rounded-b-lg">
            <Cart
              handleOpenCart={handleOpenCart}
            />
          </div>
            <div className="fixed inset-0 opacity-30 z-20 bg-dark-900">
        </div>
      </div> 
      }
    </header>
  )
}