import { z } from "zod";
import subscribSchema from "@/schemas/subscrib.schema";

type Subscribs = z.infer<typeof subscribSchema>;

export default Subscribs;
