import Image from 'next/image';
import Link from 'next/link';

import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary';

export default () => (
  <div className='container mx-auto overflow-hidden'>
    {/* BannerLg container */}
    <div
      id='bannerLg'
      className='flex flex-col gap-8 rounded-lg bg-primary-700 p-9 pt-16 text-center text-light-100 lg:flex-row lg:pb-0
            lg:text-left'
    >
      {/* Image container */}
      <div className='lg:w-1/2'>
        <Image
          src='/assets/images/pages/Home/desktop/image-speaker-zx9.png'
          alt='Product photo of ZX9 speaker'
          className='mx-auto w-32 lg:-mb-2 lg:mt-auto lg:w-80'
          width={756}
          height={918}
        />
      </div>
      {/* Info container */}
      <div className='lg:w-1/2'>
        {/* Heading */}
        <h3 className='heading-1'>ZX9 SPEAKER</h3>
        {/* Description */}
        <p className='text-body mx-auto max-w-prose pb-9 pt-6 text-center opacity-75 md:w-2/3 lg:mx-0 lg:w-3/4 lg:text-left'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        {/* Button */}
        <Link href='product/zx9-speaker'>
          <ButtonSecondary label={'SEE PRODUCT'} />
        </Link>
      </div>
    </div>
  </div>
);
