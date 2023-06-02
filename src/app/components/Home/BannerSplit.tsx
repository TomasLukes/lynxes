import Link from "next/link"
import Image from "next/image"
import ButtonSecondary from "../buttons/ButtonSecondary"

export default function BannerSm() {
  return (
    /* BannerSplit */
    <div className="container mx-auto flex flex-col md:flex-row md:gap-8">
      {/* Left item */}
      <div className="md:w-1/2 rounded-t-lg md:rounded-lg overflow-hidden">
        <Image 
          src="/assets/images/pages/Home/desktop/image-earphones-yx1.jpg"
          alt="Product image of YX1 earphones"
          className="hidden lg:block w-full object-cover lg:h-72"
          width={540}
          height={320}
        />
        <Image 
          src="/assets/images/pages/Home/tablet/image-earphones-yx1.jpg"
          alt="Product image of YX1 earphones"
          className="hidden md:block lg:hidden w-full object-cover"
          width={678}
          height={640}
        />
        <Image 
          src="/assets/images/pages/Home/mobile/image-earphones-yx1.jpg"
          alt="Product image of YX1 earphones"
          className="md:hidden w-full object-cover"
          width={654}
          height={400}
        />
      </div>
      {/* Right item */}
      <div className="md:w-1/2 flex flex-col items-start justify-center bg-light-300 p-12 lg:px-24  rounded-b-lg md:rounded-lg">
        {/* Heading */}
        <h3 className="heading-4 pb-4">
            YX1 EARPHONES
        </h3>
        {/* Button */}
        <Link href='product/yx1-earphones'>
          <ButtonSecondary
              label={'SEE PRODUCT'}
          />
        </Link>
      </div>
    </div>

  )
}