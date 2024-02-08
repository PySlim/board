import { z } from "zod";


export const userSchemaResponse = z.object({
    id: z.number().int(),
    username: z.string(),
    name: z.string(),
    email: z.string(),
    token: z.string().optional()
})


type userSchemaResponseType = z.infer<typeof userSchemaResponse>

export interface userInterfaceResponse extends userSchemaResponseType{}
