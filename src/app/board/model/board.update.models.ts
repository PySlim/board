import { z } from "zod";


export const boardSchemaUpdate = z.object({
    title: z.string().optional(),
    color: z.string().optional()
})

type boardSchemaType = z.infer<typeof boardSchemaUpdate>

export interface boardInterfaceUpdate extends boardSchemaType{}
