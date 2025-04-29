import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  age: z.number().min(18, "Age must be at least 18"),
  gender: z.enum(["Male", "Female", "Other"]),
  contactPreference: z.enum(["Email", "Phone", "SMS"]),
  hobbies: z.array(z.enum(["Reading", "Sports", "Gaming", "Traveling"])),
  bio: z.string().max(200, "Bio must be less than 200 characters").optional(),
  dateOfBirth: z.string(),
  // profilePicture: z.string().optional(),
  newsletterSubscription: z.boolean(),
});

export type CustomerFormData = z.infer<typeof customerSchema>;
