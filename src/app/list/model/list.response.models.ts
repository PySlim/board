import { z } from "zod";


export const listSchemaResponse = z.object({
    id: z.number(),
    title: z.string(),
    board_id: z.number()
})

type listSchemaResponseType = z.infer<typeof listSchemaResponse>

export interface  listInterface extends listSchemaResponseType{}

