import ProductIncludesItem from "./ProductIncludesItem"

export default function ProductDetails({ product }) {

  const ProductIncludesItems = product.includes.map((item, index) =>
    <ProductIncludesItem key={index} quantity={item.quantity} name={item.item} />
  );

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
        {/* Included items container */}
        <div className="flex flex-col gap-2">
          {ProductIncludesItems}
        </div>
      </div>
    </div>
  )
}