import { db } from '@/lib/firebase/config'
import getCartItemsFromDB from '@/lib/firebase/getDB/getCartItemsFromDB'
import { addCartItemToDB } from '@/lib/firebase/updateDB/addCartItemToDB'
import addCartItemtoLS from '@/helpers/LocalStorage/addCartItemToLS'
import { removeCartItemFromDB } from '@/lib/firebase/deleteDB/removeCartItemFromDB'
import removeCartItemFromLS from '@/helpers/LocalStorage/removeCartItemFromLS'
import { clearCartFromDB } from '@/lib/firebase/deleteDB/clearCartFromDB'
import { useEffect, useState, useContext, createContext } from "react"
import { useAuthContext } from './AuthContext'
import { ProductType } from '@/types/global'

type CartContextType = {
    cart: ProductType[],
    cartQ: number | null,
    cartTotal: number | null,
    shippingCost: number | null,
    vatPrice: number| null,
    grandTotal: number | null,
    handleAddCartItem: (addedItem: ProductType) => void,
    handleRemoveCartItem: (removedItem: ProductType) => void,
    handleClearCart: () => void,
}

export const CartContext = createContext<CartContextType | null>(null)
export const useCartContext = ():CartContextType => useContext(CartContext)

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuthContext();
    const [cart, setCart] = useState([])
    const [cartQ, setCartQ] = useState<number | null>(null)
    const [cartTotal, setCartTotal] = useState<number | null>(null)
    const [shippingCost, setShippingCost] = useState<number | null>(null)
    const [vatPrice, setVatPrice] = useState<number | null>(null)
    const [grandTotal, setGrandTotal] = useState<number | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    const cartItems = await getCartItemsFromDB(db, user.uid)
                    setCart(cartItems)
                } else {
                    const getCartFromLS = localStorage.getItem('cart')
                    setCart(JSON.parse(getCartFromLS))
                }
            } catch (error) {
                console.error('Error retrieving cart items:', error);
            } 
        }

        fetchData()
    }, [user])

    useEffect(() => {
        const calcCartQ = cart.reduce((total: number, item: number) => total + item.itemQuantity, 0);
        setCartQ(calcCartQ);
        const calcCartTotal = cart.reduce((total, item) => total + (item.itemQuantity * item.price), 0)
        setCartTotal(calcCartTotal)
        const calcShippingCost = cartQ > 0 ? 50 : 0
        setShippingCost(calcShippingCost)
        const calcVatPrice = Math.round(cartTotal * 0.21)
        setVatPrice(calcVatPrice)
        const calcGrandTotal = cartTotal + shippingCost + vatPrice
        setGrandTotal(calcGrandTotal)

    }, [cart, cartQ, cartTotal, shippingCost, vatPrice])

    async function handleAddCartItem(addedItem: ProductType) {
        if (user) {
            try {
                await addCartItemToDB(db, user.uid, addedItem)
                const cartItems = await getCartItemsFromDB(db, user.uid)
                setCart(cartItems)
            } catch (error) {
                console.log('There was an error with adding the product to cart:', error)
            }
        } else {
            addCartItemtoLS(addedItem);
            const getCartFromLS = localStorage.getItem('cart');
            setCart(JSON.parse(getCartFromLS));
        }
    }

    async function handleRemoveCartItem(removedItem: ProductType) {
        if (user) {
            try {
                await removeCartItemFromDB(db, user.uid, removedItem)
                const cartItems = await getCartItemsFromDB(db, user.uid)
                setCart(cartItems)
            } catch (error) {
                console.log('There was an error while removing the product from cart:', error)
            }
        } else {
            removeCartItemFromLS(removedItem);
            const getCartFromLS = localStorage.getItem('cart');
            setCart(JSON.parse(getCartFromLS));
        }
    }

    function handleClearCart() {
        if (user) {
            clearCartFromDB(db, user.uid)
            setCart([])
        } else {
            localStorage.removeItem("cart");
            setCart([])
        }
        setCartQ(0)
        setCartTotal(0)
    }

    return (
        <CartContext.Provider value={{ cart, cartQ, cartTotal, shippingCost, vatPrice, grandTotal, handleAddCartItem, handleRemoveCartItem, handleClearCart }}>
            {children}
        </CartContext.Provider>
    );
}