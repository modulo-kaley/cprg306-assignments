// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut as firebaseSignOut,
// } from "firebase/auth";
// import {auth} from "../firebase/config";


// //async function that uses the create user logic with email and password

// export async function signInWithEmailAndPassword(email, password){
//     try {
//         // create a user
//         const user = await createUserWithEmailAndPassword(
//             auth,
//             email,
//             password,
//         );
//         // return user 
//         return { user: userCredential.user, error: null };
//     } catch (error){
//         return { user: null, error: error.message };
//     }
// }

// export async function logout() {
//     try {
//         await firebaseSignOut (auth);
//         return { error: null };
//     } catch (error) {
//         return { error: error.message};
//     }
// }