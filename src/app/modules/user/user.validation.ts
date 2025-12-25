import { z } from 'zod';

const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    userName: z.string().optional(),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    age: z.number().optional(),
    bio: z.string().optional(),
    password: z.string().min(4, 'Password must have at least 4 characters'),
  }),
});

//TODO: need update more fields for this site

//* change some system
const updateUserProfileSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    userName: z.string().optional(),
    phone: z.string().optional(),
    password: z.string().optional(),
    age: z.number().optional(),
    bio: z.string().optional(),
    country: z.string().optional(),
  }),
});

const updateLocationZodSchema = z.object({
  body: z.object({
    longitude: z.string({ required_error: 'Longitude is required' }),
    latitude: z.string({ required_error: 'Latitude is required' }),
  }),
});

export const UserValidation = {
  createUserSchema,
  updateLocationZodSchema,
  updateUserProfileSchema,
};
