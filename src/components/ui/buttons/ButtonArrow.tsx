import Image from 'next/image';

export default function ButtonArrow({ label }) {
  return (
    <button type='button' className="flex items-center gap-1 mx-auto px-4 py-2 text-dark-900 subtitle opacity-50
    hover:text-primary-700 hover:opacity-100">
      {label}
      <Image 
        src="/assets/icons/shared/buttons/icon-arrow-right.svg" 
        alt="Arrow Icon" 
        width={8}
        height={16}
        className='inline' />
    </button>
  )
}