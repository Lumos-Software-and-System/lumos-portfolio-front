"use client";

import { MenuContext } from "@/contexts/menuContext";
import { useContext } from "react";

const useMenu = () => useContext(MenuContext);

export default useMenu;
