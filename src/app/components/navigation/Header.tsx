import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-12 px-24 bg-neutral-900 text-neutral-100">
      <h1 className="text-3xl font-bold">Lynxes</h1>
      <nav className="flex gap-6 list-none">
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

      <div>
        <img src="/icons/shared/icon-cart.svg" alt="" />
      </div>

    </header>
  )
}