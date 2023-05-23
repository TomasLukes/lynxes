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
        <Link href="/earphones">Earphones</Link>
      </li>
    </div>
  )
}