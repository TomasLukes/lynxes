import Image from 'next/image';
import Link from 'next/link';

import ButtonArrow from '@/components/ui/buttons/ButtonArrow';

export default () => <section id='categories' className='max-width mx-auto px-6 md:px-9 lg:px-6'>
      {/* Categories cards container */}
      <div
        className='container mx-auto mb-9 mt-9 flex flex-col
        justify-center md:mb-20 md:mt-32 md:flex-row md:gap-8 lg:mb-32 lg:mt-36'
      >
        {/* Headphones card */}
        <div
          className='mt-20 flex w-full flex-col rounded-lg
          bg-light-300 p-6 text-center md:mt-0'
        >
          <Image
            src='/assets/images/components/Categories/image-category-thumbnail-headphones.png'
            width={160}
            height={160}
            className='mx-auto -mt-20 h-auto w-40 md:-mt-24'
            alt='Headphones image'
          />
          {/* Category name + Btn continer */}
          <div className='mt-auto'>
            <h3 className='heading-6'>HEADPHONES</h3>
            <Link href='/category/headphones'>
              <ButtonArrow label={'SHOP'} />
            </Link>
          </div>
        </div>
        {/* Speakers card */}
        <div
          className='mt-20 flex w-full flex-col rounded-lg
          bg-light-300 p-6 text-center md:mt-0'
        >
          <Image
            src='/assets/images/components/Categories/image-category-thumbnail-speakers.png'
            width={438}
            height={408}
            className='mx-auto -mt-20 h-auto w-40 md:-mt-24'
            alt='Speakers image'
          />
          {/* Category name + Btn continer */}
          <div className='mt-auto'>
            <h3 className='heading-6'>SPEAKERS</h3>
            <Link href='/category/speakers'>
              <ButtonArrow label={'SHOP'} />
            </Link>
          </div>
        </div>
        {/* Earphones card */}
        <div
          className='mt-20 flex w-full flex-col rounded-lg
          bg-light-300 p-6 text-center md:mt-0'
        >
          <Image
            src='/assets/images/components/Categories/image-category-thumbnail-earphones.png'
            width={438}
            height={408}
            className='md:-mt-26 mx-auto -mt-20 h-auto w-40'
            alt='Earphones image'
          />
          {/* Category name + Btn continer */}
          <div className='mt-auto'>
            <h3 className='heading-6'>EARPHONES</h3>
            <Link href='/category/earphones'>
              <ButtonArrow label={'SHOP'} />
            </Link>
          </div>
        </div>
      </div>
    </section>;
