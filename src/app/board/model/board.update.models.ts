import { z } from "zod";


export const boardSchemaUpdate = z.object({
    title: z.string().min(2).optional(),
    color: z.string().min(2).optional(),
    status: z.boolean({
        required_error: "Status is required.",
        invalid_type_error: "Status should be a valid boolean."
    }).optional().transform(()=>true),
    created: z.string().optional().default(new Date().toISOString()),
    updated: z.string().optional().default(new Date().toISOString())
})

type boardSchemaType = z.infer<typeof boardSchemaUpdate>

export interface boardInterfaceUpdate extends boardSchemaType{}
