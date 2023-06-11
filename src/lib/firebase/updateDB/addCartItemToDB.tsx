import { doc, updateDoc, getDoc, setDoc } from 'firebase/firestore'

export async function addCartItemToDB(db, userID, addedItem) {
    let error = null;

    try {
        const cartRef = doc(db, 'cart', userID);
        const cartSnap = await getDoc(cartRef);
        const addedItemData = {
            productID: addedItem.productID,
            slug: addedItem.slug,
            shortName: addedItem.shortName,
            price: addedItem.price,
            itemQuantity: null,
        }

        if (cartSnap.exists()) {
            // If cart exists
            let items = cartSnap.data().items;
            // Find item in cart
            const existingItem = items.find(item => item.productID === addedItem.productID)

            if (existingItem) {
                // If item already exists in cart, increment the quantity
                existingItem.itemQuantity += 1;
            } else {
                // If item isn't in cart, add it
                addedItemData.itemQuantity = 1;
                items.push(addedItemData)
            }

            await updateDoc(cartRef, { items: items });
        } else {
            // If cart doesn't exist, create it with the new item
            await setDoc(cartRef, { items: [addedItemData] });
        }
    } catch (e) {
        error = e;
    }

    return { error };
}