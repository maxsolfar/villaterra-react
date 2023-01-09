import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { AiOutlineGoogle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

const Oauth = ({ type }) => {
  const navigate = useNavigate();
  const signWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const signIn = await signInWithPopup(auth, provider);
      const user = signIn.user;
      
      // Checking if user exists
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if(!docSnap.exists()){
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");

    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  };

  return (
    <div>
      <p className="text-sm font-medium text-gray-700 dark:text-gray-200 pb-1">
        {type} with
      </p>
      <button
        type="button"
        onClick={signWithGoogle}
        className="mt-1 inline-flex w-full justify-center rounded-md border dark:border-gray-700 dark:bg-[#24272c] dark:hover:bg-dark border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-100"
      >
        <span className="sr-only">{type} with Google</span>
        <AiOutlineGoogle className="text-xl text-primary-500 mr-2" />
        {type} with Google
      </button>
    </div>
  );
};

export default Oauth;
