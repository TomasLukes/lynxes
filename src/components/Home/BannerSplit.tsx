import Image from 'next/image';
import Link from 'next/link';

import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary';

export default () => (
  <div className='container mx-auto flex flex-col md:flex-row md:gap-8'>
    {/* Left item */}
    <div className='overflow-hidden rounded-t-lg md:w-1/2 md:rounded-lg'>
      <Image
        src='/assets/images/pages/Home/desktop/image-earphones-yx1.jpg'
        alt='Product image of YX1 earphones'
        className='hidden w-full object-cover lg:block lg:h-72'
        width={540}
        height={320}
      />
      <Image
        src='/assets/images/pages/Home/tablet/image-earphones-yx1.jpg'
        alt='Product image of YX1 earphones'
        className='hidden w-full object-cover md:block lg:hidden'
        width={678}
        height={640}
      />
      <Image
        src='/assets/images/pages/Home/mobile/image-earphones-yx1.jpg'
        alt='Product image of YX1 earphones'
        className='w-full object-cover md:hidden'
        width={654}
        height={400}
      />
    </div>
    {/* Right item */}
    <div className='flex flex-col items-start justify-center rounded-b-lg bg-light-300 p-12 md:w-1/2  md:rounded-lg lg:px-24'>
      {/* Heading */}
      <h3 className='heading-4 pb-4'>YX1 EARPHONES</h3>
      {/* Button */}
      <Link href='product/yx1-earphones'>
        <ButtonSecondary label={'SEE PRODUCT'} />
      </Link>
    </div>
  </div>
);
