import { ReactElement } from 'react';
import Link from 'next/link';

import ButtonPrimary from '@/components/ui/buttons/ButtonPrimary';
import { db } from '@/lib/firebase/config';
import { getProduct } from '@/lib/firebase/getDB/getProduct';

const Hero = async (): Promise<ReactElement> => {
  const productId = 'xx99-mark-two-headphones';
  const productData = await getProduct(db, productId);

  return (
    <section
      id='hero'
      className='mb-12 bg-neutral-900
        px-6 text-white lg:px-6'
    >
      <div className='max-width container mx-auto flex text-center lg:text-left'>
        <div className='mx-auto px-6 py-32 lg:mx-0 lg:mr-auto lg:w-1/2 lg:px-0'>
          {productData?.new && (
            <span className='overline-text opacity-25'>NEW PRODUCT</span>
          )}
          <h1 className='heading-1 max-w-prose pt-2'>{productData?.name}</h1>
          <p className='text-body mx-auto max-w-prose pb-9 pt-6 opacity-75 md:w-1/2 lg:mx-0 lg:w-2/3'>
            {productData?.description}
          </p>
          <Link href={`/product/${productData?.slug}`}>
            <ButtonPrimary type={'button'} label={'SEE PRODUCT'} style={''} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
