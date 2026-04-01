import { db } from "@/app/firebase/config";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Retrieves all items for a specific user from Firestore
export async function getItems(userId) {
  const itemsRef = collection(db, "users", userId, "items");
  const querySnapshot = await getDocs(query(itemsRef));

  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

// Adds a new item to a specific user's items subcollection
export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}