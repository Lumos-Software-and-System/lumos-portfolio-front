import { z } from "zod";

const subscribSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Digite seu nome aqui" })
    .min(1, { message: "Digite seu nome aqui." })
    .max(120, { message: "Apenas é permitido 120 caracteres." }),
  email: z
    .string()
    .nonempty({ message: "Digite seu e-mail aqui" })
    .min(1, { message: "Digite seu e-mail aqui." })
    .email({ message: "Formato de e-mail inválido." }),
});

export default subscribSchema;
