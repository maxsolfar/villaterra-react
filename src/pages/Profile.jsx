/* This example requires Tailwind CSS v2.0+ */
import { FormProfile, HeaderProfile } from '../components';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase/config';
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const Header = () => {
  const auth = getAuth();
  const [user, setUser] = useState('');

  const fetchUserInfo = async () => {
    const { uid } = auth.currentUser;
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser(docSnap.data());
      console.log('Document data:', user);
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
      return;
    }
  };

    // Get user on mount
  useEffect(() => {
    fetchUserInfo();
  }, []);


  return (
    <main>
      <HeaderProfile user={user}/>
      <section>
        <FormProfile />
      </section>
    </main>
  );
};

export default Header;
