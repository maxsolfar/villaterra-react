/* This example requires Tailwind CSS v2.0+ */
import { FormProfile, HeaderProfile } from '../components';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase/config';
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Profile = () => {
  const auth = getAuth();
  const [user, setUser] = useState('');
  const [render, setRender] = useState(false);

  const fetchUserInfo = async () => {
    const { uid } = auth.currentUser;
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser(docSnap.data());
    } else {
      console.log('No such document!');
      return;
    }
  };

  // Get user on mount
  useEffect(() => {
    fetchUserInfo();
    setRender(false);
  }, [render]);

  if (!user) {
    return (
      <section className="w-full flex items-center justify-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#00C6BA"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </section>
    );
  }

  if (user) {
    return (
      <main>
        <HeaderProfile user={user} />
        <section>
          <FormProfile user={user} setRender={setRender} />
        </section>
      </main>
    );
  }
};

export default Profile;
