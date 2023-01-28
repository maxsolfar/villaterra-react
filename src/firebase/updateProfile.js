import {
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { db } from '../firebase/config';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const updateUserProfile = async (name, description, imageProfile, photoURL) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    });
    const data = { name, photoURL, imageProfile, description};
    data.timestamp = serverTimestamp();
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, data, { merge: true });
    toast.success('User Updated!');
    return 'success';
  } catch (error) {
    toast.error('Something went wrong with the update');
    return 'error';
  }
};
