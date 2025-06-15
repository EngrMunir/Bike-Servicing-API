import { z } from "zod";

const update = z.object({
    body:z.object({
        name:z.string().optional(),
        phone: z.string().optional()
    })
})

export const customerValidationSchemas ={
    update
}