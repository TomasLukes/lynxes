import Image from 'next/image';

type SlugProp = {
  slug: string;
};

export default ({ slug }: SlugProp) => (
  <section id='productGallery' className='max-width mb-12 px-6 lg:px-6'>
    {/* Gallery container */}
    <div className='flex flex-col gap-8 md:flex-row md:gap-6'>
      <div className='flex flex-col gap-8 md:gap-6'>
        {/* Small image first */}
        <Image
          className='hidden rounded-lg lg:block'
          src={`/assets/images/products/${slug}/desktop/image-gallery-1.jpg`}
          alt=''
          width={900}
          height={560}
        />
        <Image
          className='hidden rounded-lg md:block lg:hidden'
          src={`/assets/images/products/${slug}/tablet/image-gallery-1.jpg`}
          alt=''
          width={900}
          height={560}
        />
        <Image
          className='rounded-lg md:hidden'
          src={`/assets/images/products/${slug}/mobile/image-gallery-1.jpg`}
          alt=''
          width={900}
          height={560}
        />
        {/* Small image second */}
        <Image
          className='hidden rounded-lg lg:block'
          src={`/assets/images/products/${slug}/desktop/image-gallery-2.jpg`}
          alt=''
          width={900}
          height={560}
        />
        <Image
          className='hidden rounded-lg md:block lg:hidden'
          src={`/assets/images/products/${slug}/tablet/image-gallery-2.jpg`}
          alt=''
          width={900}
          height={560}
        />
        <Image
          className='rounded-lg md:hidden'
          src={`/assets/images/products/${slug}/mobile/image-gallery-2.jpg`}
          alt=''
          width={900}
          height={560}
        />
      </div>
      {/* Large image */}
      <Image
        className='hidden rounded-lg lg:block'
        src={`/assets/images/products/${slug}/desktop/image-gallery-3.jpg`}
        alt=''
        width={1270}
        height={1184}
      />
      <Image
        className='hidden rounded-lg md:block lg:hidden'
        src={`/assets/images/products/${slug}/tablet/image-gallery-3.jpg`}
        alt=''
        width={1270}
        height={1184}
      />
      <Image
        className='rounded-lg md:hidden'
        src={`/assets/images/products/${slug}/mobile/image-gallery-3.jpg`}
        alt=''
        width={1270}
        height={1184}
      />
    </div>
  </section>
);
