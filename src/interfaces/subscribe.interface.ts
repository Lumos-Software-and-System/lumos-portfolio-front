import { z } from "zod";
import subscribSchema from "@/schemas/subscrib.schema";

type Subscribs = z.infer<typeof subscribSchema>;

interface SubscribeContexts {
  postSubscribe: (formData: Subscribs) => Promise<void>;
}

export type { SubscribeContexts, Subscribs };
