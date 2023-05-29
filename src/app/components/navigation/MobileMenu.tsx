import Link from "next/link"
import Image from "next/image"

export default function MobileMenu({ handleClick }) {
  return (
    /* Mobile menu */
    <ul className="px-6 md:px-9 py-8 flex flex-col items-center subtitle">
      <div className="flex flex-col md:flex-row text-center gap-4 md:gap-12">
        <li className="flex items-center justify-center gap-2"
          onClick={() => handleClick()}>
        <Link href="/">
          <Image
            src="/images/lynxes-logo.png"
            alt="Homepage navigation button" 
            className="bg-dark-800 p-1 w-9 mb-2 rounded-full mx-auto"
            width={50}
            height={50}
          />
          Home
          </Link>
        </li>
        <li className="flex items-center justify-center gap-2"
          onClick={() => handleClick()} >
          <Link href="/category/earphones">
            <Image
              src="/images/shared/category/image-category-thumbnail-earphones.webp"
              alt="Earphones category navigation button" 
              className="w-16 mx-auto"
              width={50}
              height={50}
            />
            Earphones
          </Link>
        </li>
        <li className="flex items-center justify-center gap-2"
          onClick={() => handleClick()} >
          <Link href="/category/headphones">
            <Image
              src="/images/shared/category/image-category-thumbnail-headphones.webp"
              alt="Headphones category navigation button" 
              className="w-16 mx-auto"
              width={50}
              height={50}
            />
            Headphones
          </Link>
        </li>
        <li className="flex items-center justify-center gap-2" 
          onClick={() => handleClick()} >
          <Link href="/category/speakers">
            <Image
                src="/images/shared/category/image-category-thumbnail-speakers.webp"
                alt="Speakers category navigation button" 
                className="w-16 mx-auto"
                width={50}
                height={50}
              />
            Speakers
          </Link>
        </li>
      </div>
    </ul>
  )
}