import Link from "next/link"

export default function Header() {
  return (
    /* Header */
    <header className="relative w-full bg-neutral-900 text-neutral-100">
      {/* Header container */}
      <div className="container mx-auto flex items-center justify-between py-12 px-6">
        {/* Mobile menu */}
        <img src="/icons/shared/menu/icon-menu-hamburger.svg" alt="" className="lg:hidden" />
        {/* Logo */}
        <h1 className="text-3xl font-bold">
          Lynxes
        </h1>
        {/* Navbar items desktop */}
        <nav className="hidden lg:flex gap-9 list-none
          subtitle">
          <li>
            <Link href="/category/earphones">Earphones</Link>
          </li>
          <li>
            <Link href="/category/headphones">Headphones</Link>
          </li>
          <li>
            <Link href="/category/speakers">Speakers</Link>
          </li>
          <li>
          <Link href="/checkout">Checkout</Link>
          </li>
        </nav>
        {/* Account + Shopping card icons */}
        <div className="flex gap-3 items-center">
          <img src="/icons/shared/icon-user-account.svg" alt="" className="fill-white"/>
          <img src="/icons/shared/icon-cart.svg" alt="" />
        </div>
      </div>
      {/* Navbar items desktop */}
      <nav className="absolute w-full bg-red-600 flex gap-6 list-none">
        <li>
          <Link href="/category/earphones">Earphones</Link>
        </li>
        <li>
          <Link href="/category/headphones">Headphones</Link>
        </li>
        <li>
          <Link href="/category/speakers">Speakers</Link>
        </li>
        <li>
          <Link href="/checkout">Checkout</Link>
        </li>
      </nav>
    </header>
  )
}