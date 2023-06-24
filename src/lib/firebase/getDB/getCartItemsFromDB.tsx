import { Firestore, doc, getDoc, } from 'firebase/firestore'

export default async function getCartItemsFromDB(db: Firestore, userID: string) {
    const docRef = doc(db, 'cart', userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().items || [];
    } else {
        console.log('No such document found');
        return [];
    }
}