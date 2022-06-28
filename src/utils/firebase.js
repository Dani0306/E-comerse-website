import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword ,
  onAuthStateChanged, 
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "e-comerce-d1ecf.firebaseapp.com",
  projectId: "e-comerce-d1ecf",
  storageBucket: "e-comerce-d1ecf.appspot.com",
  messagingSenderId: "1025223495731",
  appId: "1:1025223495731:web:48da41acd6e1644ec15346"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth(app)
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore(app);


export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db);

    objectToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object)
    })

    await batch.commit();
    console.log('done')
}

export const getcategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q)
  
  const categoryMap = querySnapshot.docs.reduce((acc, el) => {
    const { title, items } = el.data();
    acc[title.toLowerCase()] = items;
    return acc
  }, {})

  return categoryMap;
}


export const createUserDocumentFromAuth = async (userAuth, aditionalInformation = {}) => {

  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
        await setDoc(userDocRef, {
          displayName, 
          email, 
          createdAt,
          ...aditionalInformation
        })
    } catch (e){
      console.log('error creating the user', e)
    }
  }

  return userDocRef

}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)