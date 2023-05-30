import Link from "next/link"
import Image from "next/image"
import ButtonPrimary from "../buttons/ButtonPrimary"
import { reverse } from "dns"

export default function ProductItem({ reversed }) {
  return (
    /* Product Item container */
    <div className={`mx-auto flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-8 lg:gap-16`}>
      {/* Left/First item */}
      <div className="p-4 lg:w-1/2 bg-light-300 rounded-lg">
        <Image 
          src="/images/shared/category/image-category-thumbnail-earphones.webp"
          alt="Product image of YX1 Wireless earphones"
          className="m-auto"
          width={350}
          height={350}
        />
      </div>
      {/* Right/Second item */}
      <div className="lg:w-1/2 flex flex-col gap-6 lg:gap-3 text-center lg:text-left lg:my-auto">
        {/* New product span */}
        <span className=" text-primary-700">
          <p className="overline-text">NEW PRODUCT</p>
        </span>
        {/* Heading */}
        <h3 className="heading-4 uppercase md:w-1/2 md:mx-auto lg:m-0">
            YX1 Wireless Headpones
        </h3>
        {/* Product description */}
        <p className="text-body opacity-50 md:w-4/5 md:mx-auto lg:m-0">
          Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
          Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
        </p>
        {/* Button */}
        <Link href='product/yx1-earphones' className="text-light-100">
          <ButtonPrimary
              label={'SEE PRODUCT'}
          />
        </Link>
      </div>
    </div>

  )
}