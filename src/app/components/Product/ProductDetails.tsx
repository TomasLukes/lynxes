import Link from "next/link"
import Image from "next/image"
import ButtonPrimary from "../buttons/ButtonPrimary"

export default function ProductDetails({ product }) {
  return (
    /* ProductDetails container */
    <div className='mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-20 pb-12'>
      {/* Left/First item */}
      <div className="flex flex-col gap-4 md:gap-8 lg:w-2/3">
        <h5 className="heading-5 uppercase">
          Features
        </h5>
        {/* Product features*/}
        <p className="text-body opacity-50">
          {product.features}
        </p>
      </div>
      {/* Right/Second item */}
      <div className="flex flex-col md:flex-row lg:flex-col lg:w-1/3 md:gap-24">
        <h5 className="heading-5 uppercase pb-6">
          In the box
        </h5>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="text-primary-700 text-body">
              2x
            </span>
            <p className="text-body opacity-50">
              Speaker unit
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-700 text-body">
              6x
            </span>
            <p className="text-body opacity-50">
              Speaker Cloth Panel
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-700 text-body">
              1x
            </span>
            <p className="text-body opacity-50">
              User Manual
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}