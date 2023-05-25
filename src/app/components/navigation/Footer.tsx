import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-between py-6 px-12 bg-neutral-900 text-neutral-100">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold">Lynxes</h1>
        <p className="">{`Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted 
          to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.`}
        </p>
      </div>
      
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
        <li>
        <Link href="/product/1">YX1 Earphones in sale</Link>
        </li>
      </nav>

      <div className="flex gap-3">
        <img src="/icons/shared/socials/icon-facebook.svg" alt="" />
        <img src="/icons/shared/socials/icon-instagram.svg" alt="" />
        <img src="/icons/shared/socials/icon-twitter.svg" alt="" />
      </div>

    </footer>
  )
}