import Link from "next/link"
import Image from "next/image"

export default function MobileMenu({ handleClick }) {
  return (
    /* Mobile menu */
    <div className="px-6 md:px-9 py-8 flex flex-col items-center subtitle">
      <ul className="flex flex-col md:flex-row text-center gap-4 md:gap-12">
        <li className="flex items-center justify-center gap-2"
          onClick={() => handleClick()}>
        <Link href="/">
          <Image
            src="/assets/images/components/Logo/lynxes-logo-bg.png"
            alt="Homepage navigation button" 
            className="bg-primary-700 p-1 w-9 mb-2 rounded-full mx-auto"
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
              src="/assets/images/components/Categories/image-category-thumbnail-earphones.png"
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
              src="/assets/images/components/Categories/image-category-thumbnail-headphones.png"
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
                src="/assets/images/components/Categories/image-category-thumbnail-speakers.png"
                alt="Speakers category navigation button" 
                className="w-16 mx-auto"
                width={50}
                height={50}
              />
            Speakers
          </Link>
        </li>
      </ul>
    </div>
  )
}