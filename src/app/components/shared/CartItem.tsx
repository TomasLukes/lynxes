import Link from "next/link"
import Image from "next/image"
import ButtonQuantity from "../buttons/ButtonQuantity"

export default function CartItem({ product }) {

  return (
    /* CartItem container */
    <div className="flex items-center gap-4">
      {/* Items image */}
      <Image
        className="rounded-lg"
        src={`/assets/images/components/Cart/image-${product.slug}.jpg`}
        alt={`Product image of ${product.name}`}
        width={50}
        height={50}
      />
      {/* Items name + price */}
      <div>
        <h5>
          {product.name}
        </h5>
        <p>
          $ {product.price}
        </p>
      </div>
      {/* Button for toggle quantity of item */}
      <ButtonQuantity quantity={product.quantity} />
    </div>
  )
}