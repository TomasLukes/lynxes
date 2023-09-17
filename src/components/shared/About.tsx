import Image from 'next/image';

export default () => (
  <section
    id='about'
    className='gap:8 container mx-auto my-24 flex flex-col-reverse items-center px-6 md:my-28 
      md:px-9 lg:flex-row lg:px-6'
  >
    {/* Text container */}
    <div className='lg:w-1/2'>
      <h3 className='heading-2 mx-auto w-3/4 pb-6 pt-6 text-center lg:mx-0 lg:text-left'>
        Bringing you the <span className='text-primary-700'>best</span> audio
        gear
      </h3>
      <p className='text-body mx-auto max-w-prose text-center opacity-60 lg:mx-0 lg:w-3/4 lg:text-left'>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
    {/* Image container */}
    <div className='lg:w-1/2'>
      <Image
        src='/assets/images/components/About/desktop/image-best-gear.jpg'
        alt='Product image of ZX7 speaker'
        className='hidden w-3/4 rounded-lg lg:ml-auto lg:block'
        width={540}
        height={588}
      />
      <Image
        src='/assets/images/components/About/tablet/image-best-gear.jpg'
        alt='Product image of ZX7 speaker'
        className='hidden rounded-lg md:block lg:hidden'
        width={1378}
        height={600}
      />
      <Image
        src='/assets/images/components/About/mobile/image-best-gear.jpg'
        alt='Product image of ZX7 speaker'
        className='rounded-lg md:hidden'
        width={654}
        height={600}
      />
    </div>
  </section>
);
