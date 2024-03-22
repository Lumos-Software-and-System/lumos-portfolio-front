"use client";

import Subscribs from "@/interfaces/subscribe.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { buttonSubscribStyles } from "@/utils/styles/button-subscrib";
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

      <TextField
        sx={buttonSubscribStyles}
        margin="normal"
        fullWidth
        label="Seu nome"
        autoComplete="Nome"
        autoFocus
        {...register("name")}
        error={!!errors?.name}
        helperText={errors.name && `* ${errors.name.message}`}
      />

      <TextField
        sx={buttonSubscribStyles}
        margin="normal"
        fullWidth
        label="E-mail"
        autoComplete="email"
        autoFocus
        {...register("email")}
        error={!!errors?.email}
        helperText={errors.email && `* ${errors.email.message}`}
      />

      <button>
        <span>Enviar</span>
      </button>
    </form>
  );
};

export default SubscribForm;
