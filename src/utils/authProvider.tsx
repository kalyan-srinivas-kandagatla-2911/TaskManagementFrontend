import React, { createContext, useEffect, useState } from "react";
import { User } from "../types/user"
import { useGetMeQuery } from "../generated/graphql";


interface AuthContextType {
    user: User;
    loading: boolean;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    refetch: () => void;
}
interface AuthProviderProps {
    children: React.ReactNode;
}

export const initialUser: User = {
    username: "User",
    id: "User ID",
    offId: "TESTID",
    email: "user@mail.com",
    team:"Team_Two",
    role: "USER"
}

export const AuthContext = createContext<AuthContextType>({
    user: initialUser,
    loading: false,
    setUser: () => {},
    refetch: () => {},
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>(initialUser);
    const { data, loading, refetch } = useGetMeQuery();

    useEffect(() => {
        if(data) {
            setUser(data.getMe)
        }
    }, [data]);

    return (
        <AuthContext.Provider value={{user, loading, setUser, refetch}}>
            {children}
        </AuthContext.Provider>
    )
}