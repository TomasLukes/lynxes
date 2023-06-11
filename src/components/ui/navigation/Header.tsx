'use client';
import Link from "next/link"
import Image from "next/image";
import { useState } from "react"
import { useAuthContext } from "@/context/AuthContext";
import MobileMenu from "@/components/ui/navigation/MobileMenu";
import Cart from "@/components/shared/Cart";
import Logo from "@/components/shared/Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const { user } = useAuthContext();

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
      <div id="navbar-desktop" className="container max-width mx-auto flex items-center justify-between py-6 md:py-6 lg:py-12 px-6 md:px-9 lg:px-3
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
        <nav className="hidden lg:flex gap-9 list-none
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
        </nav>
        {/* Account + Shopping card icons */}
        <div className="flex gap-3 md:gap-4 items-center">
          {/* User account icon */}
          <Link href="/signin">
            <div className="relative">
              {/* Conditional rendering of green dot when user is logged in */}
              {user &&
                <div className="absolute bottom-0 right-0.5 flex items-center justify-center text-center bg-green-500 w-2 h-2 rounded-full">
              </div>
              }
              <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" className="fill-light-100
                hover:fill-primary-700 focus:fill-primary-700 cursor-pointer">
                <path d="M226-262q59-39.666 121-60.833T480-344q71 0 133.333 21.167Q675.667-301.666 734.667-262q41-49.667 59.833-103.667 18.834-54 18.834-114.333 0-141-96.167-237.167T480-813.334q-141 0-237.167 96.167T146.666-480q0 60.333 19.167 114.333T226-262Zm253.876-184.667q-58.209 0-98.043-39.957Q342-526.581 342-584.791q0-58.209 39.957-98.042 39.958-39.834 98.167-39.834t98.043 39.958Q618-642.752 618-584.543q0 58.21-39.957 98.043-39.958 39.833-98.167 39.833ZM479.73-80q-83.097 0-156.183-31.5t-127.15-85.833q-54.064-54.334-85.23-127.227Q80-397.454 80-480.333q0-82.88 31.5-155.773Q143-709 197.333-763q54.334-54 127.227-85.5Q397.454-880 480.333-880q82.88 0 155.773 31.5Q709-817 763-763t85.5 127Q880-563 880-480.177q0 82.822-31.5 155.666T763-197.333Q709-143 635.914-111.5T479.73-80Z"
                />
              </svg>
            </div>
          </Link>
          {/* Shopping icon */}
          <div className="relative">
            <div className="absolute -top-1 -right-1 flex items-center justify-center text-center bg-red-500 w-3 h-3 p-2 rounded-full">
              <span className="text-xs">3</span>
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