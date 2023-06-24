import { ProductType } from '@/types/global';
import { doc, getDoc } from 'firebase/firestore'

export default async function getProduct(db, productId: string) {
    const docRef = doc(db, 'products', productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as ProductType ;
    } else {
        console.log('No such document found');
        return null
    }
}