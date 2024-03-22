"use client";

import { iChildrenProp } from "@/interfaces/childrenProps.interface";
import MenuProvider from "./menuContext";

const ContextProvider = ({ children }: iChildrenProp) => {
    return <MenuProvider>{children}</MenuProvider>;
};

export default ContextProvider;
