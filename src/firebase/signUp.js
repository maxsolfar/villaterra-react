import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { db } from '../firebase/config';
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';

export const signUp = async (email, password, name, data) => {
  try {
    const auth = getAuth();
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    updateProfile(auth.currentUser, {
      displayName: name,
    });
    const user = userCredentials.user;
    const dataCopy = { ...data };
    delete dataCopy.password;
    dataCopy.timestamp = serverTimestamp();
    await setDoc(doc(db, "users", user.uid), dataCopy);
    toast.success("Created!");
    return "success";
  } catch (error) {
    toast.error("Something went wrong with the sign up");
    return "error";
  }
};