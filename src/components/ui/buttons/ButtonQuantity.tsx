import { useCartContext } from '@/context/CartContext';

type ButtonQuantityProps = {
  product: object,
}

export default function ButtonQuantity({ product } : ButtonQuantityProps) {
  const { handleAddCartItem, handleRemoveCartItem } = useCartContext();
  
  return (
    <div className='flex items-center ml-auto gap-3 bg-neutral-300'>
      <button type='button' onClick={() => handleRemoveCartItem(product)} className='py-1 px-2 hover:bg-light-400 hover:text-primary-700 hover:font-bold'>-</button>
      <p className=' text-sm'>{product.itemQuantity}</p>
      <button type='button' onClick={() => handleAddCartItem(product)} className='py-1 px-2 hover:bg-light-400 hover:text-primary-700 hover:font-bold'>+</button>
    </div>
  )
}