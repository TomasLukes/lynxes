import Image from 'next/image';

export default function ButtonQuantity({ quantity }) {
  return (
    <div className='flex items-center ml-auto gap-3 bg-neutral-300'>
      <button className='py-1 px-2 hover:bg-light-400 hover:text-primary-700 hover:font-bold'>-</button>
      <p className=' text-sm'>{quantity}</p>
      <button className='py-1 px-2 hover:bg-light-400 hover:text-primary-700 hover:font-bold'>+</button>
    </div>
  )
}