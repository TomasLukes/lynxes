import { doc, updateDoc, getDoc } from 'firebase/firestore'

export async function removeCartItemFromDB(db, userID, removedItem) {
    try {
        const cartRef = doc(db, 'cart', userID);
        const cartSnap = await getDoc(cartRef);

        if (cartSnap.exists()) {
            // If cart exists
            let cartItems = cartSnap.data().items;
            // Find item in cart
            const existingItem = cartItems.find(item => item.productID === removedItem.productID)

            if (!existingItem) {
                throw new Error('Product not found in the cart');
            }

            if (existingItem.itemQuantity > 1) {
                // If item have item quantity greater than 1
                const updatedItem = {...existingItem, itemQuantity: existingItem.itemQuantity - 1 }
                const updatedCartItems = cartItems.map(item => item.productID === updatedItem.productID ? updatedItem : item);
                await updateDoc(cartRef, { items: updatedCartItems });
            } else if (existingItem.itemQuantity === 1) {
                // If item have quantity of 1, remove it entirely
                const updatedCartItems = cartItems.filter(item => item.productID !== existingItem.productID )
                await updateDoc(cartRef, { items: updatedCartItems });
            }
        } else {
            throw new Error('Cart not found');
        }
    } catch (e) {
        throw e;
    }
}