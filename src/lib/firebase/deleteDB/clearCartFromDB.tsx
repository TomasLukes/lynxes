import { doc, updateDoc } from "firebase/firestore";

export async function clearCartFromDB(db, userID) {
    try {
        const cartRef = doc(db, "cart", userID);
        await updateDoc(cartRef, { items: [] });
    } catch (e) {
        throw e;
    }
}