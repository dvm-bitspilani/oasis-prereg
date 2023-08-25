// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider(props) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const value = {
//     isLoggedIn,
//     setIsLoggedIn
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// }

import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const initialIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const value = {
    isLoggedIn,
    setIsLoggedIn
  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}
