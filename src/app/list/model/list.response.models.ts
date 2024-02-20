import { z } from "zod";


export const listSchemaResponse = z.object({
    id: z.number(),
    title: z.string().transform(value=>{
        const words = value.split(' ');
        const wordCapitalized = words.map((word)=>{
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        })
        return wordCapitalized.join(' ')
    }),
    board_id: z.number()
})

type listSchemaResponseType = z.infer<typeof listSchemaResponse>

export interface  listInterfaceResponse extends listSchemaResponseType{}

