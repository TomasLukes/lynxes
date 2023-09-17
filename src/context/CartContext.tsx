import { createContext, useContext, useEffect, useState } from 'react';

import addCartItemtoLS from '@/helpers/LocalStorage/addCartItemToLS';
import removeCartItemFromLS from '@/helpers/LocalStorage/removeCartItemFromLS';
import { db } from '@/lib/firebase/config';
import { clearCartFromDB } from '@/lib/firebase/deleteDB/clearCartFromDB';
import { removeCartItemFromDB } from '@/lib/firebase/deleteDB/removeCartItemFromDB';
import getCartItemsFromDB from '@/lib/firebase/getDB/getCartItemsFromDB';
import { addCartItemToDB } from '@/lib/firebase/updateDB/addCartItemToDB';
import { ProductType } from '@/types/global';

import { AuthContextType, useAuthContext } from './AuthContext';

type CartContextType = {
  cart: ProductType[];
  cartQ: number | null;
  cartTotal: number | null;
  shippingCost: number | null;
  vatPrice: number | null;
  grandTotal: number | null;
  handleAddCartItem: (addedItem: ProductType) => void;
  handleRemoveCartItem: (removedItem: ProductType) => void;
  handleClearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  cartQ: null,
  cartTotal: null,
  shippingCost: null,
  vatPrice: null,
  grandTotal: null,
  handleAddCartItem: () => {},
  handleRemoveCartItem: () => {},
  handleClearCart: () => {},
});

export const useCartContext = (): CartContextType => useContext(CartContext);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useAuthContext() as AuthContextType;
  const [cart, setCart] = useState<ProductType[]>([]);
  const [cartQ, setCartQ] = useState<number | null>(null);
  const [cartTotal, setCartTotal] = useState<number | null>(null);
  const [shippingCost, setShippingCost] = useState<number | null>(null);
  const [vatPrice, setVatPrice] = useState<number | null>(null);
  const [grandTotal, setGrandTotal] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const cartItems = await getCartItemsFromDB(db, user.uid);
          setCart(cartItems);
        } else {
          const getCartFromLS = localStorage.getItem('cart');
          const cartItems = getCartFromLS ? JSON.parse(getCartFromLS) : [];
          setCart(cartItems);
        }
      } catch (error) {
        console.error('Error retrieving cart items:', error);
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    const calcCartQ = cart.reduce(
      (total, item) => total + item.itemQuantity,
      0
    );
    setCartQ(calcCartQ);

    const calcCartTotal = cart.reduce(
      (total, item) => total + item.itemQuantity * item.price,
      0
    );
    setCartTotal(calcCartTotal);

    const calcShippingCost = cartQ ? 50 : 0;
    setShippingCost(calcShippingCost);

    const calcVatPrice = Math.round((cartTotal ?? 0) * 0.21);
    setVatPrice(calcVatPrice);

    const calcGrandTotal =
      (cartTotal ?? 0) + (shippingCost ?? 0) + (vatPrice ?? 0);
    setGrandTotal(calcGrandTotal);
  }, [cart, cartQ, cartTotal, shippingCost, vatPrice]);

  const handleAddCartItem = async (addedItem: ProductType) => {
    if (user) {
      try {
        await addCartItemToDB(db, user.uid, addedItem);
        const cartItems = await getCartItemsFromDB(db, user.uid);
        setCart(cartItems);
      } catch (error) {
        console.log(
          'There was an error with adding the product to cart:',
          error
        );
      }
    } else {
      addCartItemtoLS(addedItem);
      const getCartFromLS = localStorage.getItem('cart');
      const cartItems = getCartFromLS ? JSON.parse(getCartFromLS) : [];
      setCart(cartItems);
    }
  };

  const handleRemoveCartItem = async (removedItem: ProductType) => {
    if (user) {
      try {
        await removeCartItemFromDB(db, user.uid, removedItem);
        const cartItems = await getCartItemsFromDB(db, user.uid);
        setCart(cartItems);
      } catch (error) {
        console.log(
          'There was an error while removing the product from cart:',
          error
        );
      }
    } else {
      removeCartItemFromLS(removedItem);
      const getCartFromLS = localStorage.getItem('cart');
      const cartItems = getCartFromLS ? JSON.parse(getCartFromLS) : [];
      setCart(cartItems);
    }
  };

  const handleClearCart = () => {
    if (user) {
      clearCartFromDB(db, user.uid);
      setCart([]);
    } else {
      localStorage.removeItem('cart');
      setCart([]);
    }
    setCartQ(0);
    setCartTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartQ,
        cartTotal,
        shippingCost,
        vatPrice,
        grandTotal,
        handleAddCartItem,
        handleRemoveCartItem,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
