import { z } from "zod";

export const contactInfoFormSchema = z.object({
  fullName: z.string(),
  phoneNumber: z.string().optional(),
  email: z.string().optional(),
})

export type ContactInfoFormData = z.infer<typeof contactInfoFormSchema>;
