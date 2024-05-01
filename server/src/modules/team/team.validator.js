const {z} = require('zod');

const createTeamSchema = z.object({
    name: z.string().min(2).max(50),
    designation: z.string().min(2),
    twitter: z.string().url(),
    facebook: z.string().url(),
    linkedIn: z.string().url(),
    telegram: z.string().url(),
})


module.exports = {createFaqSchema};