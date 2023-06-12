import { doc, deleteDoc } from "firebase/firestore";

export async function clearCartFromDB(db, userID) {
    try {
        await deleteDoc(doc(db, "cart", userID));
    } catch (e) {
        throw e;
    }
}