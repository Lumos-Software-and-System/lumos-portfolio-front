"use client";

import Subscribs from "@/interfaces/subscribe.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import subscribSchema from "@/schemas/subscrib.schema";
import styles from "./styles.module.scss";

const SubscribForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Subscribs>({
    resolver: zodResolver(subscribSchema),
  });

  const submit = (formData: Subscribs) => {
    console.log(formData);
  };

  return (
    <form
      className={styles.container__formSubscrib}
      onSubmit={handleSubmit(submit)}
    >
      <h2>Fique por dentro das novidades!</h2>

      <div>
        <input
          type="text"
          placeholder="Digite seu nome..."
          {...register("name")}
        />
        {errors.name?.message && <p> * {errors.name?.message}</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Digite seu E-mail..."
          {...register("email")}
        />
        {errors.email?.message && <p> * {errors.email?.message}</p>}
      </div>

      <button>
        <span>Enviar email</span>
      </button>
    </form>
  );
};

export default SubscribForm;
