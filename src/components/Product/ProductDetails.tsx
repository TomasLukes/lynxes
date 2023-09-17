import { ProductProp } from '@/types/global';

import ProductIncludesItem from './ProductIncludesItem';

type ProductIncludesItemProps = {
  quantity: number;
  name: string;
};

export default ({ product }: ProductProp) => {
  const ProductIncludesItems = product.includes.map((item, index: number) => (
    <ProductIncludesItem
      key={index}
      quantity={item.quantity}
      name={item.item}
    />
  ));

  return (
    /* ProductDetails container */
    <div className='mx-auto flex flex-col gap-12 pb-12 md:gap-16 lg:flex-row lg:gap-20'>
      {/* Left/First item */}
      <div className='flex flex-col gap-4 md:gap-8 lg:w-2/3'>
        <h5 className='heading-5 uppercase'>Features</h5>
        {/* Product features*/}
        <p className='text-body opacity-50'>{product.features}</p>
      </div>
      {/* Right/Second item */}
      <div className='flex flex-col md:flex-row md:gap-24 lg:w-1/3 lg:flex-col'>
        <h5 className='heading-5 pb-6 uppercase'>In the box</h5>
        {/* Included items container */}
        <div className='flex flex-col gap-2'>{ProductIncludesItems}</div>
      </div>
    </div>
  );
};
