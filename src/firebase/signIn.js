import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { toast } from 'react-toastify';

export const signIn= async (email, password) => {
  try {
    const auth = getAuth();
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if(userCredentials.user){
      toast.success("Success, Redirecting...");
      return "success";
    }
  } catch (error) {
    toast.error("Bad user credentials");
    return "error";
  }
};