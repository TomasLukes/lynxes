'use client'
import Link from "next/link"
import Image from "next/image"
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary"
import { useAuthContext } from "@/context/AuthContext"
import { db } from "@/lib/firebase/config"
import { useCartContext } from "@/context/CartContext"

export default function ProductHero({ product }) {
  const { user } = useAuthContext();
  const { handleAddCartItem } = useCartContext();

  return (
    /* Product Item container */
    <div className='mx-auto flex flex-col md:flex-row gap-6 md:gap-16 pb-12'>
      {/* Left/First item */}
      <div className="flex items-center p-4 md:w-1/2 bg-light-300 rounded-lg">
        <Image
          src={`/assets/images/products/${product.slug}/desktop/image-product.jpg`}
          alt={`Product image of ${product.name}`}
          width={1080}
          height={1120}
        />
      </div>
      {/* Right/Second item */}
      <div className="md:w-1/2 flex flex-col gap-4 lg:gap-3 md:my-auto md:py-6">
        {/* New product span */}
        {product.new &&
          <span className=" text-primary-700">
            <p className="overline-text">NEW PRODUCT</p>
          </span>
        }
        {/* Heading */}
        <h3 className="heading-4 uppercase lg:w-1/2 mx-auto md:m-0">
            {product.name}
        </h3>
        {/* Product description */}
        <p className="text-body opacity-50 lg:w-4/5 mx-auto md:m-0">
          {product.description}
        </p>
        {/* Product price */}
        <p className="heading-6">
            $ {product.price.toLocaleString('en-US')}
        </p>
        {/* Button */}
        <ButtonPrimary
          type={'button'}
          label={'ADD TO CART'}
          style={'w-1/2'}
          onClick={() => handleAddCartItem(product)}
        />
      </div>
    </div>

  )
}