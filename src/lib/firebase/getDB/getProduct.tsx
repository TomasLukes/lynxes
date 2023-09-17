import { doc, Firestore, getDoc } from 'firebase/firestore';

import { ProductType } from '@/types/global';

export default async (db: Firestore, productId: string) => {
  const docRef = doc(db, 'products', productId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as ProductType;
  } else {
    console.log('No such document found');
    return null;
  }
};
