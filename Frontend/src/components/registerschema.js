import z from "zod";
export const registerschema=z.object({
    name:z.string().min(3,"name must contain 3 letters"),
    email:z.string().email("enter a valid email"),
    password:z.string().min(8,"password should be minimum of 8"),
    age:z.coerce.number().min(18,"age should minimum of 18")
})