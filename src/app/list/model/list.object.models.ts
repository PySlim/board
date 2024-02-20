import { z } from "zod";

export const listSchema = z.object({
    title: z.string({
        required_error: "title is required.",
        invalid_type_error: "title should be a valid string of at least two characters."
    }).min(2).refine((value)=>true,{message:'it must be a valid text string.'}).transform((value)=>value.toUpperCase().trim()),
    board_id: z.number({
        required_error: "Board id is required.",
        invalid_type_error: "Board id should be a valid number."
    }),
    status: z.boolean({
        required_error: "Status is required.",
        invalid_type_error: "Status should be a valid boolean."
    }).optional().transform(()=>true),
    created: z.string().optional().default(new Date().toISOString()),
    updated: z.string().optional().default(new Date().toISOString())
})

type listSchemaYType = z.infer<typeof listSchema>

export interface  listInterface extends  listSchemaYType{}
export interface  listInterfaceData extends listSchemaYType{
    id: number
}

export const listFieldsValid : string[] = ['title', 'board_id']
