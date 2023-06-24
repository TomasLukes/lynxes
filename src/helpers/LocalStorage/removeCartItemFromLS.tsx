import { ProductType } from "@/types/global";

export default function removeCartItemFromLS(removedItem: ProductType) {
    const cart = localStorage.getItem('cart')

    if (cart) {
        const cartItems: ProductType[] = JSON.parse(cart)

        const existingItem = cartItems.find((cartItem: ProductType) => cartItem.productID === removedItem.productID)

        if (!existingItem) {
            throw new Error('Product not found in the cart');
        }

        if(existingItem.itemQuantity > 1) {
            const updatedExistingItem = {...existingItem, itemQuantity: existingItem.itemQuantity - 1 };
            const updatedCartItems = cartItems.map((item: ProductType) =>
                item.productID === updatedExistingItem.productID ? updatedExistingItem : item
            );
            localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        } else if (existingItem.itemQuantity === 1) {
            const updatedCartItems = cartItems.filter((cartItem: ProductType) => cartItem.productID !== existingItem.productID);
            localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        }
    }
}
