import Image from 'next/image';
import arrowIcon from '/public/icons/shared/icon-arrow-right.svg';

export default function ButtonArrow({ label }) {
  return (
    <button className="flex items-center gap-1 px-4 py-2 text-dark-900 opacity-50 font-bold
    hover:text-primary-700 hover:opacity-100">
      {label}
      <Image src={arrowIcon} alt="Arrow Icon" className='inline' />
    </button>
  )
}