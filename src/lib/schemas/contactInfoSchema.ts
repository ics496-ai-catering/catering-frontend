import { z } from "zod";

const contactInfoSchema = z.object({
  fullName: z.string(),
  phoneNumber: z.string().optional(),
  email: z.string().optional(),
})

export type ContactInfoFormData = z.infer<typeof contactInfoSchema>;

export default contactInfoSchema;
