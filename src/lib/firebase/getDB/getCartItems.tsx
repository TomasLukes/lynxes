import { doc, getDoc, } from 'firebase/firestore'

export default async function getCartItems(db, userID) {
    const docRef = doc(db, 'cart', userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else (
        console.log('No such document found')
    )
}