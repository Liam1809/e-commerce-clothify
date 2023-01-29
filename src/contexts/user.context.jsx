import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { authStateFirebase, createAuthUserFromDocFireBase } from '../api';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = authStateFirebase(user => {
      if (user) {
        createAuthUserFromDocFireBase(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
