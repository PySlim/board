import { z } from "zod";


export const listSchemaUpdate = z.object({
    title: z.string().min(2).refine((value)=>true,{message:'it must be a valid text string.'}).transform((value)=>value.toUpperCase().trim()).optional(),
})

type listSchemaUpdateType = z.infer<typeof listSchemaUpdate>

export interface  listInterfaceUpdate extends listSchemaUpdateType{}

