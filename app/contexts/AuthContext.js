// "use client";
// import { createContext, useContext, useState, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase/config";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [authUser, setAuthUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(
//       auth,
//       (user) => {
//         if (user) {
//           console.log("User Authenticated: ", user.email);
//         } else {
//           console.log("No User Found");
//         }
//         setAuthUser(user);
//         setLoading(false);
//         console.log("loading complete");
//       },
//       (error) => {
//         console.error("Auth error", error);
//         setAuthUser(null);
//         setLoading(false);
//       },
//     );
//     return () => {
//       console.log("Cleaning up listener");
//       unsubscribe();
//     };
//   }, []);

//   // pass values to the provider
//   return (
//     <AuthContext.Provider value={{ authUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // custom hook for authentication
// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error(
//       "Context Error: useAuth must be used within the Auth Provider",
//     );
//   }
//   return context;
// }