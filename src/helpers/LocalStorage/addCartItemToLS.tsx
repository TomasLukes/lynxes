import { ProductType } from "@/types/global";

export default function addCartItemtoLS(addedItem: ProductType) {
    const addedItemData = {
        productID: addedItem.productID,
        slug: addedItem.slug,
        shortName: addedItem.shortName,
        price: addedItem.price,
        itemQuantity: addedItem.itemQuantity,
    }

    let cart;
    const cartItems = localStorage.getItem('cart')
    if (cartItems) {
    cart = JSON.parse(cartItems)}

    const existingItem = cart.find((item: ProductType) => item.productID === addedItemData.productID )

    if(existingItem) {
        existingItem.itemQuantity += 1;
    } else {
        addedItemData.itemQuantity += 1;
        cart.push(addedItemData)
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}