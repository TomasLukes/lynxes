import { ReactElement } from 'react';
import Link from 'next/link';

import ButtonPrimary from '@/components/ui/buttons/ButtonPrimary';

const Hero = (): ReactElement => (
  <section
    id='hero'
    className='mb-12 bg-neutral-900
        px-6 text-white lg:px-6'
  >
    {/* Hero container */}
    <div
      className='max-width container mx-auto flex text-center lg:text-left
            '
    >
      {/* Info container */}
      <div className='mx-auto px-6 py-32 lg:mx-0 lg:mr-auto lg:w-1/2 lg:px-0'>
        <span className='overline-text opacity-25'>NEW PRODUCT</span>
        <h1 className='heading-1 max-w-prose pt-2'>XX99 MARK II HEADPHONES</h1>
        <p className='text-body mx-auto max-w-prose pb-9 pt-6 opacity-75 md:w-1/2 lg:mx-0 lg:w-2/3'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link href='/product/xx99-mark-two-headphones'>
          <ButtonPrimary type={'button'} label={'SEE PRODUCT'} style={''} />
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
