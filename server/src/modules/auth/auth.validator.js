const {z} = require('zod');

const registerSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/),
    confirmPassword: z.string()
}).refine((data)=>data.password === data.confirmPassword , {
    message:"Password and confirm password doesn't match",
    path: ['confirmPassword']
})

const loginSchema = z.object({
    email: z.string().email().min(1),
    password: z.string().min(8)
})


module.exports = {registerSchema, loginSchema};