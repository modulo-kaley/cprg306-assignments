import {
    createUserWithEmailAndPassword,
    signOut as firebaseSignOut,
} from "firebase/auth";
import { auth } from "../firebase/config";

// Creates a new Firebase user with email + password.
// Returns { user, error: null } on success, { user: null, error: string } on failure.
export async function signUpWithEmailAndPassword(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        );
        return { user: userCredential.user, error: null };
    } catch (error) {
        return { user: null, error: error.message };
    }
}

// Signs the current user out.
// Returns { error: null } on success, { error: string } on failure.
export async function logout() {
    try {
        await firebaseSignOut(auth);
        return { error: null };
    } catch (error) {
        return { error: error.message };
    }
}
