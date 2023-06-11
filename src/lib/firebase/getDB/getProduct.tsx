import { doc, getDoc } from 'firebase/firestore'

export default async function getProduct(db, productId) {
    const docRef = doc(db, 'products', productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else (
        console.log('No such document found')
    )
}