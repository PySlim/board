import { z } from "zod";

export const cardSchema = z.object({
    title: z.string({
        required_error: "title is required.",
        invalid_type_error: "title should be a valid string of at least two characters."
    }).min(2).refine((value)=>true,{message:'it must be a valid text string.'}).transform((value)=>value.toUpperCase().trim()),
    body: z.string({
        required_error: "body is required.",
        invalid_type_error: "body should be a valid string of at least two characters."
    }),
    preview: z.number({
        invalid_type_error: "preview should be a valid number."
    }).optional(),
    next: z.number({
        invalid_type_error: "preview should be a valid number."
    }).optional(),
    list_id: z.number({
        required_error: "List id is required.",
        invalid_type_error: "List id should be a valid string of at least two characters."
    }),
    status: z.boolean({
        required_error: "Status is required.",
        invalid_type_error: "Status should be a valid boolean."
    }).optional().transform(()=>true),
    created: z.string().optional().default(new Date().toISOString()),
    updated: z.string().optional().default(new Date().toISOString())
})


type cardSchemaType = z.infer<typeof cardSchema>

export interface cardInterface extends cardSchemaType{}
export interface cardInterfaceData extends cardSchemaType{
    id: number
}

export const cardFieldsValid: string[] = ['title', 'list_id','body']
