import { MenuContextProps } from "@/interfaces/menuContext.interface";
import { ChildrenProp } from "@/interfaces/childrenProps.interface";

import { createContext, useState } from "react";

export const MenuContext = createContext({} as MenuContextProps);

const MenuProvider = ({ children }: ChildrenProp) => {
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
