import Link from "next/link"

export default function MobileMenu() {
  return (
    /* Mobile menu */
    <ul className="px-6 py-4 flex flex-col gap-4 subtitle">
      <li className="flex items-center gap-6">
        <img src="\images\shared\image-best-gear.webp" alt="" className="w-8 rounded-full" />
        <Link href="/">Home</Link>
      </li>
      <li className="flex gap-2">
        <img src="/images/shared/category/image-category-thumbnail-earphones.webp" alt="" className="w-12" />
        <Link href="/category/earphones">Earphones</Link>
      </li>
      <li className="flex gap-2">
        <img src="/images/shared/category/image-category-thumbnail-headphones.webp" alt="" className="w-12" />
        <Link href="/category/headphones">Headphones</Link>
      </li>
      <li className="flex gap-2">
        <img src="/images/shared/category/image-category-thumbnail-speakers.webp" alt="" className="w-12" />
        <Link href="/category/speakers">Speakers</Link>
      </li>
    </ul>
  )
}