import { doc, getDoc } from 'firebase/firestore'

export async function getProduct(db, productId) {
    const docRef = doc(db, 'products', productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log('Document data', docSnap.data());
        return docSnap.data();
    } else (
        console.log('No such document found')
    )
}