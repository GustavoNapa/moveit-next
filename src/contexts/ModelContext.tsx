import { Children, createContext, ReactNode } from "react";

interface RenameThisContextData {

}

interface RenameThisProviderProps {
    children: ReactNode;
}

const RenameThisContext = createContext({} as RenameThisContextData);

export function RenameThisProvider({ children }: RenameThisProviderProps) {

    return (
        <RenameThisContext.Provider value={{}}>
            {Children}
        </RenameThisContext.Provider>
    )

}