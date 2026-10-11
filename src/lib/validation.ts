import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your name (at least 2 characters)")
    .max(80, "Name is too long"),
  phoneNumber: z
    .string()
    .min(10, "Please enter a valid 10-digit phone number")
    .regex(/^[0-9+\s\-()]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  serviceRequired: z.enum(
    [
      "precision-laser-cutting",
      "cnc-bending",
      "both-cutting-and-bending",
      "general-inquiry",
    ],
    {
      message: "Please select a service option",
    }
  ),
  materialAndThickness: z
    .string()
    .max(120, "Material details too long")
    .optional(),
  quantity: z
    .string()
    .max(50, "Quantity details too long")
    .optional(),
  projectDetails: z
    .string()
    .min(10, "Please describe your part or project requirements (at least 10 characters)")
    .max(1000, "Description is too long"),
  preferredContact: z.enum(["phone", "whatsapp"], {
    message: "Please choose your preferred contact method",
  }),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
