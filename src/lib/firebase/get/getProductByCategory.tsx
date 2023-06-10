import { collection, query, where, getDocs } from 'firebase/firestore'

export async function getProductsByCategory(db, category) {
    const q = query(collection(db, 'products'), where('category', '==', category));

    const querySnapshot = await getDocs(q)
    const products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    });

    return products;
}