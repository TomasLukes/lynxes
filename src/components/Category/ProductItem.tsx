import Image from 'next/image';
import Link from 'next/link';

import ButtonPrimary from '@/components/ui/buttons/ButtonPrimary';
import { ProductProp } from '@/types/global';

export default ({ product }: ProductProp) => {
  const reversed = product.productID % 2 == 0;

  return (
    /* Product Item container */
    <div
      className={`mx-auto flex flex-col ${
        reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-6 md:gap-8 lg:gap-16`}
    >
      {/* Left/First item */}
      <div className='flex items-center rounded-lg bg-light-300 p-4 lg:w-1/2'>
        <Image
          src={`/assets/images/products/${product.slug}/desktop/image-category-page-preview.jpg`}
          alt={`Product image of ${product.name}`}
          className='m-auto hidden w-3/4 lg:block'
          width={1080}
          height={1120}
        />
        <Image
          src={`/assets/images/products/${product.slug}/tablet/image-category-page-preview.jpg`}
          alt={`Product image of ${product.name}`}
          className='m-auto hidden md:block lg:hidden'
          width={1378}
          height={704}
        />
        <Image
          src={`/assets/images/products/${product.slug}/mobile/image-category-page-preview.jpg`}
          alt={`Product image of ${product.name}`}
          className='m-auto md:hidden'
          width={654}
          height={704}
        />
      </div>
      {/* Right/Second item */}
      <div className='flex flex-col gap-6 text-center lg:my-auto lg:w-1/2 lg:gap-3 lg:text-left'>
        {/* New product span */}
        {product.new && (
          <span className=' text-primary-700'>
            <p className='overline-text'>NEW PRODUCT</p>
          </span>
        )}
        {/* Heading */}
        <h3 className='heading-4 uppercase md:mx-auto md:w-1/2 lg:m-0'>
          {product.name}
        </h3>
        {/* Product description */}
        <p className='text-body opacity-50 md:mx-auto md:w-4/5 lg:m-0'>
          {product.description}
        </p>
        {/* Button */}
        <Link href={`product/${product.slug}`} className='text-light-100'>
          <ButtonPrimary
            type='button'
            style={'text-light-100'}
            label={'SEE PRODUCT'}
          />
        </Link>
      </div>
    </div>
  );
};
