import { z } from "zod";

export const cardSchemaResponse = z.object({
    id: z.number(),
    title: z.string(),
    body: z.string(),
    preview: z.number().nullish(),
    next: z.number().nullish(),
    list_id: z.number()
})

type cardSchemaResponseType = z.infer<typeof cardSchemaResponse>

export interface cardInterfaceResponse extends cardSchemaResponseType{}
