import { z } from "zod";


export const userSchemaUpdate = z.object({
    username: z.string().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional()
})


type userSchemaUpdateType = z.infer<typeof userSchemaUpdate>

export interface userInterfaceUpdate extends userSchemaUpdateType{}
