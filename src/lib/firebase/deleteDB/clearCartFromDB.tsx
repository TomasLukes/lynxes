import { doc, Firestore, updateDoc } from 'firebase/firestore';

export const clearCartFromDB = async (db: Firestore, userID: string) => {
  try {
    const cartRef = doc(db, 'cart', userID);
    await updateDoc(cartRef, { items: [] });
  } catch (e) {
    throw e;
  }
};
