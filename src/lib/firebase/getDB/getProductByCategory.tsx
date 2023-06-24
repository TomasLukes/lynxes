import { ProductType } from '@/types/global';
import { collection, query, where, getDocs, Firestore } from 'firebase/firestore'

export default async function getProductsByCategory(db: Firestore, category: string) {
    const q = query(collection(db, 'products'), where('category', '==', category));

    const querySnapshot = await getDocs(q)
    const products: ProductType[] = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data() as ProductType)
    });

    return products;
}