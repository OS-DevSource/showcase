import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Tell us a bit more"),
  website: z.string().optional(), // Honeypot
});

export type ContactPayload = z.infer<typeof contactSchema>;
