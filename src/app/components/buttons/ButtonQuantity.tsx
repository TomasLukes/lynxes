import Image from 'next/image';

export default function ButtonQuantity({ quantity }) {
  return (
    <div className='flex ml-auto gap-3 py-1 px-2 bg-neutral-300'>
      <button>-</button>
      <p>{quantity}</p>
      <button>+</button>
    </div>

  )
}