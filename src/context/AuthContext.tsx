// import { createContext, useContext, useState, ReactNode } from "react";

// // Define the type for User
// interface User {
//   name: string;
//   email: string;
//   token?: string;
// }

// // Define the type for Auth Context
// interface AuthContextType {
//   user: User | null;
//   setUser: (user: User | null) => void;
// }

// // Create Context with default value as null
// const AuthContext = createContext<AuthContextType | null>(null);

// // Provider Component
// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use Auth Context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within an AuthProvider");
//   return context;
// };
