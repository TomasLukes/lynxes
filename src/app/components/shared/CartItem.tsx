import Link from "next/link"
import Image from "next/image"
import ButtonQuantity from "../buttons/ButtonQuantity"

export default function CartItem({ product }) {

  return (
    /* CartItem container */
    <div className="flex items-center gap-4 mb-4">
      {/* Items image */}
      <Image
        className="rounded-lg"
        src={`/assets/images/components/Cart/image-${product.slug}.jpg`}
        alt={`Product image of ${product.shortName}`}
        width={50}
        height={50}
      />
      {/* Items name + price */}
      <div className="pr-4 md:pr-16 lg:pr-20">
        <h5 className="subtitle">
          {product.shortName}
        </h5>
        <p className="text-body opacity-50">
          $ {product.price.toLocaleString('en-US')}
        </p>
      </div>
      {/* Button for toggle quantity of item */}
      <ButtonQuantity quantity={product.quantity} />
    </div>
  )
}