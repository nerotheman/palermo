import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().nonempty("Name is required."),
  email: z.string().nonempty("Email is required.").email("Invalid email."),
  message: z
    .string()
    .nonempty("Message is required.")
    .min(6, { message: "Message must be at least 6 characters." }),
  recaptchaToken: z.string().optional(),
});
