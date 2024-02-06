import { z } from "zod";


export const listSchemaUpdate = z.object({
    id: z.number().optional(),
    title: z.string().optional(),
    board_id: z.number().optional()
})

type listSchemaUpdateType = z.infer<typeof listSchemaUpdate>

export interface  listInterfaceUpdate extends listSchemaUpdateType{}

