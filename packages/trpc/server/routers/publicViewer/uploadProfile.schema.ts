import { z } from "zod";

import { FULL_NAME_LENGTH_MAX_LIMIT } from "@calcom/lib/constants";
import { userMetadata } from "@calcom/prisma/zod-utils";

export const ZUploadProfileInputSchema = z.object({
  username: z.string(),
  name: z.string().max(FULL_NAME_LENGTH_MAX_LIMIT).optional(),
  price: z.number().min(0).optional(),
  email: z.string(),
  position: z.string().optional(),
  address: z.string().optional(),
  experiences: z.array(
    z.object({
      position: z.string(),
      company: z.string(),
      address: z.string().optional(),
      startMonth: z.number().optional(),
      startYear: z.number().optional(),
      endMonth: z.number().optional(),
      endYear: z.number().optional(),
      avatar: z.nullable(z.string()).optional(),
    })
  ).optional(),
  educations: z.array(
    z.object({
      school: z.string(),
      major: z.string().optional(),
      degree: z.string().optional(),
      startMonth: z.number().optional(),
      startYear: z.number().optional(),
      endMonth: z.number().optional(),
      endYear: z.number().optional(),
      avatar: z.nullable(z.string()).optional(),
    })
  ).optional(),
  skills: z.array(z.string()).optional(),
  bio: z.string().optional(),
  avatar: z.string().optional(),
  timeZone: z.string().optional(),
  weekStart: z.string().optional(),
  hideBranding: z.boolean().optional(),
  allowDynamicBooking: z.boolean().optional(),
  brandColor: z.string().optional(),
  darkBrandColor: z.string().optional(),
  theme: z.string().optional().nullable(),
  completedOnboarding: z.boolean().optional(),
  locale: z.string().optional(),
  timeFormat: z.number().optional(),
  disableImpersonation: z.boolean().optional(),
  metadata: userMetadata.optional(),
});

export type TUploadProfileInputSchema = z.infer<typeof ZUploadProfileInputSchema>;
