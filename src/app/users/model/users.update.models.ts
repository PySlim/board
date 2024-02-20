import { z } from "zod";


export const userSchemaUpdate = z.object({
    username: z.string().min(2).optional(),
    name: z.string().min(2).optional(),
    email: z.string().email().optional(),
    password: z.string().min(8).optional()
})


type userSchemaUpdateType = z.infer<typeof userSchemaUpdate>

export interface userInterfaceUpdate extends userSchemaUpdateType{}
