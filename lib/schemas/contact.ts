import { z } from "zod";

/** Schema pronto para formulário de contato/inscrição (feature futura). */
export const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Mensagem muito curta"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
