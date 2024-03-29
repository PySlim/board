import { z } from "zod";

export const userSchema = z.object({
    username: z.string({
        required_error: "userName is required.",
        invalid_type_error: "userName should be a valid string of at least two characters."
    }).min(2).refine((value)=>true,{message:'it must be a valid text string.'}).transform((value)=>value.toUpperCase().trim()),
    name: z.string({
        required_error: "Name is required.",
        invalid_type_error: "Name should be a valid string of at least two characters."
    }).refine((value)=>true,{message:'it must be a valid text string.'}).transform((value)=>value.toUpperCase().trim()).optional(),
    email: z.string({
        required_error: "email is required.",
        invalid_type_error: "email should be a valid string of at least two characters."
    }).email().transform((value)=>value.toUpperCase().trim()).optional(),
    password: z.string({
        required_error: "Password is required.",
        invalid_type_error: "Password should be a valid string of at least two characters."
    }).min(8),
    status: z.boolean({
        required_error: "Status is required.",
        invalid_type_error: "Status should be a valid boolean."
    }).optional().transform(()=>true),
    created: z.string().optional().default(new Date().toISOString()),
    updated: z.string().optional().default(new Date().toISOString())
})


type userSchemaType = z.infer<typeof userSchema>

export interface userInterface extends userSchemaType{}
export interface userInterfaceData extends  userSchemaType{
    id: number,
    token?: string
}


export const userFieldsValid: string[] = ['username','name','email']
