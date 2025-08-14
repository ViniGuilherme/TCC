import { z } from "zod";

export const signInSchema = z.object({
    email: z.email('Você deve informar um e-mail válido'),
    password: z.string().min(6,'A senha deve ter pelo menos 6 caracteres'),
});

export type SignInFormData = z.infer<typeof signInSchema>;