
export default function removeCartItemFromLS(addedItem) {
    const addedItemData = {
        productID: addedItem.productID,
        slug: addedItem.slug,
        shortName: addedItem.shortName,
        price: addedItem.price,
        itemQuantity: null,
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.productID === addedItemData.productID )

    if(existingItem) {
        existingItem.itemQuantity += 1;
    } else {
        addedItemData.itemQuantity += 1;
        cart.push(addedItemData)
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}