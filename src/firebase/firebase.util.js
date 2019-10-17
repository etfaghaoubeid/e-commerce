import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDb_xrNGv47Tw-6M0UR-TtEgv2fook_tuw",
    authDomain: "crown-db-8c4f4.firebaseapp.com",
    databaseURL: "https://crown-db-8c4f4.firebaseio.com",
    projectId: "crown-db-8c4f4",
    storageBucket: "crown-db-8c4f4.appspot.com",
    messagingSenderId: "742323628419",
    appId: "1:742323628419:web:cc7d6e17361c62b512aeb6",
    measurementId: "G-VV79RBZ3JP"
  };
// export  const  creteUserProfileDocument = async (userAuth,otherData)=>{
//   if(!userAuth) {
//     return;
//   }
//   const userRef = firestore.doc(`users/${userAuth.uid}`)
//   const snapChot = await userRef.get();

//   if(!snapChot.exists){
//     const {email,displayName} = userAuth ;
//     // console.log(email,11111111111111111111111111)
//     // console.log(userAuth,2222222222222)

//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName ,email,createdAt,...otherData
//       })
//     }catch(error){
//       console.log(error.message)
//     }

//   }
//   return userRef;
// }   


export const creteUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase
