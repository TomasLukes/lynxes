'use client';
import Link from "next/link"
import { useState } from "react"
import MobileMenu from "./MobileMenu";

export default function Header() {

  const [mobileMenuOpen , setMobileMenuOpen] = useState(false)

  function handleClick() {
    console.log(mobileMenuOpen)
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    /* Header */
    <header className="relative w-full bg-neutral-900 text-neutral-100">
      {/* Header container */}
      <div className="container mx-auto flex items-center justify-between py-6 md:py-12 px-6">
        {/* Mobile menu */}
        <img src={`/icons/shared/menu/icon-menu-${mobileMenuOpen ? 'hamburger' : 'close'}.svg`} alt="" 
          className="lg:hidden" 
          onClick={ handleClick }
        />
        {/* Logo */}
        <h1 className="text-3xl font-bold mr-auto lg:mr-0 pl-6 lg:pl-0">
          Lynxes
        </h1>
        {/* Navbar items desktop */}
        <nav className="hidden lg:flex gap-9 list-none
          subtitle">
          <li>
          <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/category/earphones">Earphones</Link>
          </li>
          <li>
            <Link href="/category/headphones">Headphones</Link>
          </li>
          <li>
            <Link href="/category/speakers">Speakers</Link>
          </li>
        </nav>
        {/* Account + Shopping card icons */}
        <div className="flex gap-3 items-center">
          <img src="/icons/shared/icon-user-account.svg" alt="" className="fill-white"/>
          <img src="/icons/shared/icon-cart.svg" alt="" />
        </div>
      </div>
      {/* Navbar items desktop */}
      <nav className={`${mobileMenuOpen && 'hidden'} absolute w-full flex-col gap-8 bg-light-300 text-dark-800 text-center list-none
        rounded-b-lg`}>
        <MobileMenu />
      </nav>
    </header>
  )
}