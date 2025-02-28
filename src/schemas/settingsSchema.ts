import { z } from "zod";

export const settingsFormSchema = z.object({
  personalInfo: z.object({
    fullName: z.string(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
    dateOfBirth: z.string(),
  }),
  address: z.object({
    present: z.string(),
    permanent: z.string(),
    city: z.string(),
    postalCode: z.string(),
    country: z.string(),
  }),
});

export type SettingsFormData = z.infer<typeof settingsFormSchema>;
