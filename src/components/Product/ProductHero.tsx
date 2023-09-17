'use client';
import Image from 'next/image';

import ButtonPrimary from '@/components/ui/buttons/ButtonPrimary';
import { useCartContext } from '@/context/CartContext';
import { ProductProp } from '@/types/global';

export default ({ product }: ProductProp) => {
  const { handleAddCartItem } = useCartContext();

  return (
    /* Product Item container */
    <div className='mx-auto flex flex-col gap-6 pb-12 md:flex-row md:gap-16'>
      {/* Left/First item */}
      <div className='flex items-center rounded-lg bg-light-300 p-4 md:w-1/2'>
        <Image
          src={`/assets/images/products/${product.slug}/desktop/image-product.jpg`}
          alt={`Product image of ${product.name}`}
          width={1080}
          height={1120}
        />
      </div>
      {/* Right/Second item */}
      <div className='flex flex-col gap-4 md:my-auto md:w-1/2 md:py-6 lg:gap-3'>
        {/* New product span */}
        {product.new && (
          <span className=' text-primary-700'>
            <p className='overline-text'>NEW PRODUCT</p>
          </span>
        )}
        {/* Heading */}
        <h3 className='heading-4 mx-auto uppercase md:m-0 lg:w-1/2'>
          {product.name}
        </h3>
        {/* Product description */}
        <p className='text-body mx-auto opacity-50 md:m-0 lg:w-4/5'>
          {product.description}
        </p>
        {/* Product price */}
        <p className='heading-6'>$ {product.price.toLocaleString('en-US')}</p>
        {/* Button */}
        <ButtonPrimary
          type={'button'}
          label={'ADD TO CART'}
          style={'w-1/2 button-text-white'}
          onClick={() => handleAddCartItem(product)}
        />
      </div>
    </div>
  );
};
