import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { db } from '../firebase/config';
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const signUp = async ({ email, password, name }) => {
  try {
    const auth = getAuth();
    const defaultProfileImage = "https://images.unsplash.com/photo-1584184087921-b397a56c13c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1971&q=80";
    const defaultPhotoURL = "https://i.imgur.com/XVfnyap.jpg";
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: defaultPhotoURL,
    });
    const user = userCredentials.user;
    const data = { name, email, photoURL: defaultPhotoURL, profileImage: defaultProfileImage, description: '' };
    data.timestamp = serverTimestamp();
    await setDoc(doc(db, 'users', user.uid), data);
    toast.success('User Created!');
    return 'success';
  } catch (error) {
    toast.error('Something went wrong with the sign up');
    return 'error';
  }
};
