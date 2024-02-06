import { z } from "zod";

export const cardSchemaUpdate = z.object({
    title: z.string().optional(),
    body: z.string().optional(),
    preview: z.number().optional(),
    next: z.number().optional(),
    list_id: z.number().optional()
})

type cardSchemaUpdateType = z.infer<typeof cardSchemaUpdate>

export interface cardInterfaceUpdate extends cardSchemaUpdateType{}
