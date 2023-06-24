import { Firestore, doc, updateDoc } from "firebase/firestore";

export async function clearCartFromDB(db: Firestore, userID: string) {
    try {
        const cartRef = doc(db, "cart", userID);
        await updateDoc(cartRef, { items: [] });
    } catch (e) {
        throw e;
    }
}