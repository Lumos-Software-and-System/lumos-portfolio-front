import api from "@/services/api";
import Toastfy from "@/components/toastfy/toastfy";
import { createContext } from "react";
import { ChildrenProp } from "@/interfaces/childrenProps.interface";
import { SubscribeContexts, Subscribs } from "@/interfaces/subscribe.interface";

const SubscribeContext = createContext({} as SubscribeContexts);

const SubscribeProvider = ({ children }: ChildrenProp) => {
  const postSubscribe = async (formData: Subscribs) => {
    try {
      await api.post("/subscribs", formData);

      Toastfy({ message: "Obrigado por se inscrever.", isSucess: true });
    } catch (error) {
      console.log(error);

      Toastfy({
        message: "Esse E-mail já foi cadastrado",
      });
    }
  };

  return (
    <SubscribeContext.Provider value={{ postSubscribe }}>
      {children}
    </SubscribeContext.Provider>
  );
};

export { SubscribeContext, SubscribeProvider };
