import { SubscribeContext } from "@/contexts/subscribeContext";
import { useContext } from "react";

const useSubscribe = () => useContext(SubscribeContext);

export default useSubscribe;
