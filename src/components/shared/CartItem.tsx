import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ButtonQuantity from '@/components/ui/buttons/ButtonQuantity';
import { ProductProp } from '@/types/global';

const CartItem = ({ product }: ProductProp): ReactElement => {
  const totalPrice = product.itemQuantity * product.price;

  return (
    /* CartItem container */
    <div className='mb-4 flex items-center gap-4'>
      {/* Items image */}
      <Link href={`product/${product.slug}`}>
        <Image
          className='rounded-lg'
          src={`/assets/images/components/Cart/image-${product.slug}.jpg`}
          alt={`Product image of ${product.shortName}`}
          width={50}
          height={50}
        />
      </Link>
      {/* Items name + price */}
      <div className='pr-4 md:pr-14 lg:pr-16'>
        <Link href={`product/${product.slug}`}>
          <h5 className='subtitle'>{product.shortName}</h5>
        </Link>
        <p className='text-body whitespace-nowrap opacity-50'>
          $ {totalPrice.toLocaleString('en-US')}
        </p>
      </div>
      {/* Button for toggle quantity of item */}
      <ButtonQuantity product={product} />
    </div>
  );
};
