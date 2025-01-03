import { z } from "zod";

export const UserFormValidation = z.object({
    name: z.string()
        .min(2, "Username must be at least 2 characters.")
        .max(50, "Username must be at most 50 characters."),
    email: z.string().email('Invalid email address'),
    phone: z.string().refine((phone) => /^\+?\d{1,3} ?\d{1,4}( ?\d{2,4}){1,3}$/.test(phone),
          'Invalid phone number'),
});