import Link from 'next/link';

import ButtonSecondary from '@/components/ui/buttons/ButtonSecondary';

export default () => <div className='container mx-auto'>
      {/* BannerSm container */}
      <div
        id='bannerSm'
        className='flex h-80 gap-8 rounded-lg bg-light-300 p-6 text-dark-900 md:p-12 lg:p-16'
      >
        {/* Heading + button container */}
        <div className='my-auto mr-auto'>
          {/* Heading */}
          <h3 className='heading-4 pb-4'>ZX7 SPEAKER</h3>
          {/* Button */}
          <Link href='product/zx7-speaker'>
            <ButtonSecondary label={'SEE PRODUCT'} />
          </Link>
        </div>
      </div>
    </div>;
