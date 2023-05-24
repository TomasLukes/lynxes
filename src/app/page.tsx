import Link from "next/link"
import ButtonPrimary from "./components/buttons/ButtonPrimary"
import ButtonSecondary from "./components/buttons/ButtonSecondary"
import ButtonArrow from "./components/buttons/ButtonArrow"

export default function Home() {
  return (
    <div className="">
      <h1 className="mx-auto bg-red-500 text-center">Test</h1>
      <ButtonPrimary label='SEE PRODUCTS' />
      <ButtonSecondary label='SEE PRODUCTS' />
      <ButtonArrow label='SHOP' />
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
    </div>
  )
}