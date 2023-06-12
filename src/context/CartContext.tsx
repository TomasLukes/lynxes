import { useAuthContext } from './AuthContext'
import { db } from '@/lib/firebase/config'
import { useEffect, useState, useContext, createContext } from "react"
import getCartItemsFromDB from '@/lib/firebase/getDB/getCartItemsFromDB'
import { addCartItemToDB } from '@/lib/firebase/updateDB/addCartItemToDB'
import addCartItemtoLS from '@/helpers/addCartItemToLS'
import { removeCartItemFromDB } from '@/lib/firebase/deleteDB/removeCartItemFromDB'
import removeCartItemFromLS from '@/helpers/removeCartItemFromLS'
import { clearCartFromDB } from '@/lib/firebase/deleteDB/clearCartFromDB'

export const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const { user } = useAuthContext();
    const [cart, setCart] = useState([])
    const [cartQ, setCartQ] = useState(null)
    const [cartTotal, setCartTotal] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (user) {
            getCartItemsFromDB(db, user.uid)
                .then(cartItems => {
                    setCart(cartItems)
                    setLoading(false);
                });
        } else {
            const getCartFromLS = localStorage.getItem('cart');
            if (getCartFromLS) {
                setCart(JSON.parse(getCartFromLS))
            }
            setLoading(false);
        }
    }, [user]);

    useEffect(() => {
        const calcCartQ = cart.reduce((total, item) => total + item.itemQuantity, 0);
        setCartQ(calcCartQ);
        const calcCartTotal = cart.reduce((total, item) => total + (item.itemQuantity * item.price), 0)
        setCartTotal(calcCartTotal)
      }, [cart])

    function handleAddCartItem(addedItem) {
        if (user) {
            addCartItemToDB(db, user.uid, addedItem)
            .then(() => getCartItemsFromDB(db, user.uid))
            .then(cartItems => {
                setCart(cartItems);
            });
        } else {
            addCartItemtoLS(addedItem);
            const getCartFromLS = localStorage.getItem('cart');
            setCart(JSON.parse(getCartFromLS));
        }
    }

    function handleRemoveCartItem(removedItem) {
        if (user) {
            removeCartItemFromDB(db, user.uid, removedItem)
            .then(() => getCartItemsFromDB(db, user.uid))
            .then(cartItems => {
                setCart(cartItems);
            });
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
    }

    return (
        <CartContext.Provider value={{ cart, cartQ, cartTotal, handleAddCartItem, handleRemoveCartItem, handleClearCart }}>
            {loading ? <div>Loading...</div> : children}
        </CartContext.Provider>
    );
}
