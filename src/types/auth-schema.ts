import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(1, {message: "Password is required"}),
});


export const registerSchema = z.object({
    firstname: z.string().min(1, {message: "First name is required"}),
    lastname: z.string().min(1, {message: "Last name is required"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters"}),
    phone: z.string().min(10, {message: "Phone number is required"}),
});