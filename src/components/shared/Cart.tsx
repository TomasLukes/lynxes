import Link from "next/link"
import CartItem from "./CartItem"
import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary"
import { useCartContext } from "@/context/CartContext";

export default function Cart({ handleOpenCart }) {
  const { cart } = useCartContext();

  let cartTotal = 0;
  let cartItems = [];
  let cartLength = 0;

  if (cart) {
/*     cartTotal = cart.reduce((total, currentValue) => total + currentValue.price, 0); */
    cartItems = cart.map((item, index) => <CartItem key={index} product={item} />);
    cartLength = cart.length;
  }

  return (
    <div className="lg:w-90">
      {/* Cart container */}
      <div className="flex justify-end lg:w-90 z-50">
        <div className="bg-light-100 text-dark-900 p-8 mt-4 mx-4 md:mx-0 md:mr-9 lg:mr-0 rounded-lg"> 
          <div className="flex items-center justify-between">
            <h5 className="subtitle uppercase">
              {`Cart (${cartLength})`}
            </h5>
            <button onClick={() => handleOpenCart()}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                <path d="m251.333-204.667-46.666-46.666L433.334-480 204.667-708.667l46.666-46.666L480-526.666l228.667-228.667 46.666 46.666L526.666-480l228.667 228.667-46.666 46.666L480-433.334 251.333-204.667Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 my-8">
            {cartItems}
          </div>
          <div className="flex items-center justify-between my-4">
            <span className="subtitle opacity-50">
              TOTAL
            </span>
            <p className="heading-6">
              $ {cartTotal.toLocaleString('en-US')}
            </p>
          </div>
          <Link href="/checkout" className="text-light-100" onClick={() => handleOpenCart()}>
            <ButtonPrimary
              label={'Checkout'}
              style={'w-full'}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
