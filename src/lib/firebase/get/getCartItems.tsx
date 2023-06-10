import { doc, getDoc, } from 'firebase/firestore'

export async function getCartItems(db, userID) {
    const docRef = doc(db, 'cart', userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log('Document data', docSnap.data());
        return docSnap.data();
    } else (
        console.log('No such document found')
    )
}