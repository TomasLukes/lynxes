import Link from "next/link"

export default function Earphones() {
  return (
    <section>
      <h1 className="mx-auto bg-red-500 text-center">Earphones</h1>
      <ul>
        <li>
          <Link href="/product/YX1">YX1 Earphones in sale</Link>
        </li>
        <li>
          <Link href="/product/XX59">XX59 Speaker in sale</Link>
        </li>
        <li>
          <Link href="/product/XX99">XX99 Headphones in sale</Link>
        </li>
      </ul>
    </section>
  )
}
