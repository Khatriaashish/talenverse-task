const {z} = require('zod');

const contactSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().regex(/^\+?\d{1,3}[- ]?\d{3,}$/),
    subject: z.string(),
    message: z.string()
})


module.exports = {contactSchema};