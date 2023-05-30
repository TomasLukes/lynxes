import Link from "next/link"
import Image from "next/image"
import ButtonPrimary from "../buttons/ButtonPrimary"

export default function ProductHero() {
  return (
    /* Product Item container */
    <div className='mx-auto flex flex-col md:flex-row gap-6 md:gap-16 pb-12'>
      {/* Left/First item */}
      <div className="flex items-center p-4 md:w-1/2 bg-light-300 rounded-lg">
        <Image 
          src="/images/shared/category/image-category-thumbnail-earphones.webp"
          alt="Product image of YX1 Wireless earphones"
          width={350}
          height={350}
        />
      </div>
      {/* Right/Second item */}
      <div className="md:w-1/2 flex flex-col gap-4 lg:gap-3 md:my-auto md:py-6">
        {/* New product span */}
        <span className=" text-primary-700">
          <p className="overline-text">NEW PRODUCT</p>
        </span>
        {/* Heading */}
        <h3 className="heading-4 uppercase lg:w-1/2 mx-auto md:m-0">
            YX1 Wireless Headpones
        </h3>
        {/* Product description */}
        <p className="text-body opacity-50 lg:w-4/5 mx-auto md:m-0">
          Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
          Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
        </p>
        {/* Product price */}
        <p className="heading-6">
            $ 2,999
        </p>
        {/* Button */}
        <Link href='product/yx1-earphones' className="text-light-100">
          <ButtonPrimary
              label={'ADD TO CART'}
          />
        </Link>
      </div>
    </div>

  )
}