export default function removeCartItemFromLS(removedItem) {
    const cartItems = JSON.parse(localStorage.getItem('cart'))

    if (cartItems) {
        const existingItem = cartItems.find(cartItem => cartItem.productID === removedItem.productID)

        if (!existingItem) {
            throw new Error('Product not found in the cart');
        }

        if(existingItem.itemQuantity > 1) {
            const updatedExistingItem = {...existingItem, itemQuantity: existingItem.itemQuantity - 1 };
            const updatedCartItems = cartItems.map(item =>
                item.productID === updatedExistingItem.productID ? updatedExistingItem : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        } else if (existingItem.itemQuantity === 1) {
            const updatedCartItems = cartItems.filter(cartItem => cartItem.productID !== existingItem.productID);
            localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        }
    }
}
