"use client";

import { iMenuContextProps } from "@/interfaces/menuContext.interface";
import { iChildrenProp } from "@/interfaces/childrenProps.interface";

import { createContext, useState } from "react";

export const MenuContext = createContext({} as iMenuContextProps);

const MenuProvider = ({ children }: iChildrenProp) => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    };
    return (
        <MenuContext.Provider
            value={{
                menu,
                setMenu,
                handleMenu,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};

export default MenuProvider;
