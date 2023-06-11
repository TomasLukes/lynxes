import { useAuthContext } from './AuthContext'
import { db } from '@/lib/firebase/config'
import { useEffect, useState, useContext, createContext } from "react"
import getCartItemsFromDB from '@/lib/firebase/getDB/getCartItemsFromDB'
import { addCartItemToDB } from '@/lib/firebase/updateDB/addCartItemToDB'
import addCartItemtoLS from '@/helpers/addCartItemToLS'

export const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const { user } = useAuthContext();
    const [cart, setCart] = useState([])
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

    function handleAddCartItem(addedItem) {
        if (user) {
            addCartItemToDB(db, user.uid, addedItem)
            .then(() => getCartItemsFromDB(db, user.uid))
            .then(cartItems => {
                setCart(cartItems);
            });
        } else {
            addCartItemtoLS(addedItem)
            .then(() => {
                const getCartFromLS = localStorage.getItem('cart');
                setCart(JSON.parse(getCartFromLS));
            });
        }
    }

    return (
        <CartContext.Provider value={{ cart, handleAddCartItem }}>
            {loading ? <div>Loading...</div> : children}
        </CartContext.Provider>
    );
}
