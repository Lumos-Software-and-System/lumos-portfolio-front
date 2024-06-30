"use client";
import { Subscribs } from "@/interfaces/subscribe.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import subscribSchema from "@/schemas/subscrib.schema";
import useSubscribe from "@/hooks/useSubscribe.hook";
import styles from "./styles.module.scss";

const SubscribForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Subscribs>({
    resolver: zodResolver(subscribSchema),
  });

  const { postSubscribe } = useSubscribe();

  const submit = (formData: Subscribs) => {
    postSubscribe(formData);
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
          placeholder="Digite seu e-mail..."
          {...register("email")}
        />
        {errors.email?.message && <p> * {errors.email?.message}</p>}
      </div>

      <button>
        <span>Inscrever-se</span>
      </button>
    </form>
  );
};

export default SubscribForm;
