import {
  getAuth,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { toast } from 'react-toastify';

export const forgotPassword = async (email) => {
  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
    toast.success('Success, email was sent!');
    return 'success';
  } catch (error) {
    toast.error('Could not send reset password');
    return 'error';
  }
};
