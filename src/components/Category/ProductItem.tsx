import Link from "next/link"
import Image from "next/image"
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary"

export default function ProductItem({ product }) {
  const reversed = product.id % 2 == 0;

  return (
    /* Product Item container */
    <div className={`mx-auto flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-8 lg:gap-16`}>
      {/* Left/First item */}
      <div className="flex items-center p-4 lg:w-1/2 bg-light-300 rounded-lg">
        <Image 
          src={`/assets/images/products/${product.slug}/desktop/image-category-page-preview.jpg`}
          alt={`Product image of ${product.name}`}
          className="hidden lg:block m-auto w-3/4"
          width={1080}
          height={1120}
        />
        <Image 
          src={`/assets/images/products/${product.slug}/tablet/image-category-page-preview.jpg`}
          alt={`Product image of ${product.name}`}
          className="hidden md:block lg:hidden m-auto"
          width={1378}
          height={704}
        />
        <Image 
          src={`/assets/images/products/${product.slug}/mobile/image-category-page-preview.jpg`}
          alt={`Product image of ${product.name}`}
          className="md:hidden m-auto"
          width={654}
          height={704}
        />
      </div>
      {/* Right/Second item */}
      <div className="lg:w-1/2 flex flex-col gap-6 lg:gap-3 text-center lg:text-left lg:my-auto">
        {/* New product span */}
        {product.new &&
          <span className=" text-primary-700">
            <p className="overline-text">NEW PRODUCT</p>
          </span>
        }
        {/* Heading */}
        <h3 className="heading-4 uppercase md:w-1/2 md:mx-auto lg:m-0">
            {product.name}
        </h3>
        {/* Product description */}
        <p className="text-body opacity-50 md:w-4/5 md:mx-auto lg:m-0">
          {product.description}
        </p>
        {/* Button */}
        <Link href={`product/${product.slug}`} className="text-light-100">
          <ButtonPrimary
              style={'text-light-100'}
              label={'SEE PRODUCT'}
          />
        </Link>
      </div>
    </div>

  )
}