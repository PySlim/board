import { z } from "zod";

export const boardSchema = z.object({
    title: z.string({
        required_error: "title is required.",
        invalid_type_error: "title should be a valid string of at least two characters."
    }).refine((value)=>true,{message:'it must be a valid text string.'}).transform((value)=>value.toUpperCase().trim()),
    color: z.string({
        required_error: "Color is required.",
        invalid_type_error: "Color should be a valid string of at least two characters."
    }).refine((value)=>true,{message:'it must be a valid text string.'}).transform((value)=>value.toUpperCase().trim()),
    user_id: z.number({
        required_error: "User id is required.",
        invalid_type_error: "User id should be a valid number."
    }),
    status: z.boolean({
        required_error: "Status is required.",
        invalid_type_error: "Status should be a valid boolean."
    }).optional().transform(()=>true),
    created: z.string().optional().default(new Date().toISOString()),
    updated: z.string().optional().default(new Date().toISOString())
})

type boardSchemaType = z.infer<typeof boardSchema>

export interface boardInterface extends boardSchemaType{}
export interface boardInterfaceData extends  boardSchemaType{
    id: number
}


export const boardFieldsValid: string[] = ['title']
