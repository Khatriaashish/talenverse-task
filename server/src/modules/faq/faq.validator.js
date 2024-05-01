const {z} = require('zod');

const createFaqSchema = z.object({
    question: z.string().min(1),
    answer: z.string().min(1)
})


module.exports = {createFaqSchema};