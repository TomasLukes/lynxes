import { doc, Firestore, getDoc } from 'firebase/firestore';

export default async (db: Firestore, userID: string) => {
  const docRef = doc(db, 'cart', userID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().items || [];
  } else {
    console.log('No such document found');
    return [];
  }
};
