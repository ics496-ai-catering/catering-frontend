import { z } from "zod";

export const eventTypes = [
  {
    id: "wedding",
    label: "Wedding",
  },
  {
    id: "birthday",
    label: "Birthday",
  },
  {
    id: "film-set",
    label: "Film Set",
  },
  {
    id: "party",
    label: "Party",
  },
  {
    id: "other",
    label: "Other",
  },
] as const;

export const services = [
  {
    id: "tents",
    label: "Tents",
  },
  {
    id: "serving-staff",
    label: "Serving Staff",
  },
  {
    id: "entertainment",
    label: "Entertainment",
  },
  {
    id: "delivery",
    label: "Delivery",
  },
] as const;

const cateringInfoSchema = z.object({
  eventType: z.enum(eventTypes.map(e => e.id) as [string, ...string[]]),
  // z.coerce needed to convert input string to number for z
  partySize: z.coerce.number().min(1,{
    message: "Party size must be at least 1."
  }),
  // It might be better to separate the date and time in the future
  dateTime: z.date(),
  budgetPerPerson: z.coerce.number().min(0, {
    message: "Budget must be at least 0."
  }),
  location: z.string(),
  services: z.array(z.enum(services.map(s => s.id) as [string, ...string[]])),
  moreInfo: z.string().optional(),
})

export type CateringInfoFormData = z.infer<typeof cateringInfoSchema>;

export default cateringInfoSchema;
