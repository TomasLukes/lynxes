import { useCartContext } from '@/context/CartContext';
import { ProductType } from '@/types/global';

type ButtonQuantityProps = {
  product: ProductType;
};

export default ({ product }: ButtonQuantityProps) => {
  const { handleAddCartItem, handleRemoveCartItem } = useCartContext();

  return (
    <div className='ml-auto flex items-center gap-3 bg-neutral-300'>
      <button
        type='button'
        onClick={() => handleRemoveCartItem(product)}
        className='px-2 py-1 hover:bg-light-400 hover:font-bold hover:text-primary-700'
      >
        -
      </button>
      <p className=' text-sm'>{product.itemQuantity}</p>
      <button
        type='button'
        onClick={() => handleAddCartItem(product)}
        className='px-2 py-1 hover:bg-light-400 hover:font-bold hover:text-primary-700'
      >
        +
      </button>
    </div>
  );
};
