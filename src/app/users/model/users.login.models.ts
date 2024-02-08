import { z } from "zod";

export const userSchemaLogin = z.object({
    username: z.string({
        required_error: "userName is required.",
        invalid_type_error: "userName should be a valid string of at least two characters."
    }).refine((value)=>true,{message:'it must be a valid text string.'}).transform((value)=>value.toUpperCase().trim()),
    password: z.string({
        required_error: "Password is required.",
        invalid_type_error: "Password should be a valid string of at least two characters."
    })
})

type userSchemaLoginType = z.infer<typeof userSchemaLogin>

export interface userInterfaceLogin extends  userSchemaLoginType{}
