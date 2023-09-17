import Image from 'next/image';
import Link from 'next/link';

type MobileMenuProps = {
  handleClick: () => void;
};

export default ({ handleClick }: MobileMenuProps) => (
  <div className='subtitle flex flex-col items-center px-6 py-8 md:px-9'>
    <ul className='flex flex-col gap-4 text-center md:flex-row md:gap-12'>
      <li
        className='flex items-center justify-center gap-2'
        onClick={() => handleClick()}
      >
        <Link href='/'>
          <Image
            src='/assets/images/components/Logo/lynxes-logo-bg.png'
            alt='Homepage navigation button'
            className='mx-auto mb-2 w-9 rounded-full bg-primary-700 p-1'
            width={50}
            height={50}
          />
          Home
        </Link>
      </li>
      <li
        className='flex items-center justify-center gap-2'
        onClick={() => handleClick()}
      >
        <Link href='/category/earphones'>
          <Image
            src='/assets/images/components/Categories/image-category-thumbnail-earphones.png'
            alt='Earphones category navigation button'
            className='mx-auto w-16'
            width={50}
            height={50}
          />
          Earphones
        </Link>
      </li>
      <li
        className='flex items-center justify-center gap-2'
        onClick={() => handleClick()}
      >
        <Link href='/category/headphones'>
          <Image
            src='/assets/images/components/Categories/image-category-thumbnail-headphones.png'
            alt='Headphones category navigation button'
            className='mx-auto w-16'
            width={50}
            height={50}
          />
          Headphones
        </Link>
      </li>
      <li
        className='flex items-center justify-center gap-2'
        onClick={() => handleClick()}
      >
        <Link href='/category/speakers'>
          <Image
            src='/assets/images/components/Categories/image-category-thumbnail-speakers.png'
            alt='Speakers category navigation button'
            className='mx-auto w-16'
            width={50}
            height={50}
          />
          Speakers
        </Link>
      </li>
    </ul>
  </div>
);
