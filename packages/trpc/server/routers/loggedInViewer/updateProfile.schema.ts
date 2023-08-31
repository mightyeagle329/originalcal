import { z } from "zod";

import { FULL_NAME_LENGTH_MAX_LIMIT } from "@calcom/lib/constants";
import { userMetadata } from "@calcom/prisma/zod-utils";

export const ZUpdateProfileInputSchema = z.object({
  username: z.string().optional(),
  name: z.string().max(FULL_NAME_LENGTH_MAX_LIMIT).optional(),
  email: z.string().optional(),
  position: z.string(),
  address: z.string(),
  experiences: z.array(
    z.object({
      position: z.string(),
      company: z.string(),
      address: z.string().optional(),
      startMonth: z.string().optional(),
      startYear: z.string().optional(),
      endMonth: z.string().optional(),
      endYear: z.string().optional(),
      avatar: z.string().optional(),
    })
  ),
  skills: z.array(z.string()),
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

export type TUpdateProfileInputSchema = z.infer<typeof ZUpdateProfileInputSchema>;
