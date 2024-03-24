"use client";

import { ChildrenProp } from "@/interfaces/childrenProps.interface";
import MenuProvider from "./menuContext";
import { SubscribeProvider } from "./subscribeContext";

const ContextProvider = ({ children }: ChildrenProp) => {
  return (
    <MenuProvider>
      <SubscribeProvider>{children}</SubscribeProvider>
    </MenuProvider>
  );
};

export default ContextProvider;
