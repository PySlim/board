import { z } from "zod";


export const boardSchemaResponse = z.object({
    id: z.number().int(),
    title: z.string(),
    color: z.string(),
    user_id: z.number().int()
})

type boardSchemaType = z.infer<typeof boardSchemaResponse>

export interface boardInterfaceResponse extends boardSchemaType{}
