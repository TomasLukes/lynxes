import Link from "next/link"

export default function MobileMenu({ handleClick }) {
  return (
    /* Mobile menu */
    <ul className="px-6 md:px-9 py-8 flex flex-col items-center subtitle">
      <div className="flex flex-col md:flex-row text-center gap-4 md:gap-12">
        <li className="flex items-center justify-center gap-2"
          onClick={() => handleClick()}>
        <Link href="/">
          <img src="\images\shared\image-best-gear.webp" alt="" className="w-9 mb-2 rounded-full mx-auto" />
          Home
          </Link>
        </li>
        <li className="flex items-center justify-center gap-2"
          onClick={() => handleClick()} >
          <Link href="/category/earphones">
            <img src="/images/shared/category/image-category-thumbnail-earphones.webp" alt="" className="w-16 mx-auto" />
            Earphones
          </Link>
        </li>
        <li className="flex items-center justify-center gap-2"
          onClick={() => handleClick()} >
          <Link href="/category/headphones">
            <img src="/images/shared/category/image-category-thumbnail-headphones.webp" alt="" className="w-16 mx-auto" />
            Headphones
          </Link>
        </li>
        <li className="flex items-center justify-center gap-2" 
          onClick={() => handleClick()} >
          <Link href="/category/speakers">
          <img src="/images/shared/category/image-category-thumbnail-speakers.webp" alt="" className="w-16 mx-auto" />
            Speakers
          </Link>
        </li>
      </div>
    </ul>
  )
}