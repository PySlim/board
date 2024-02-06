import { z } from "zod";

export const listSchema = z.object({
    title: z.string({
        required_error: "title is required.",
        invalid_type_error: "title should be a valid string of at least two characters."
    }).refine((value)=>true,{message:'it must be a valid text string.'}).transform((value)=>value.toUpperCase().trim()),
    board_id: z.number({
        required_error: "Board id is required.",
        invalid_type_error: "Board id should be a valid number."
    })
})

type listSchemaYType = z.infer<typeof listSchema>

export interface  listInterface extends  listSchemaYType{}
export interface  listInterfaceData extends listSchemaYType{
    id: number
}

export const listFieldsValid : string[] = ['title', 'board_id']
