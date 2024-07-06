const { z } = require("zod");

// Define your Zod schema for validation
const referralBody = z.object({
    yourEmail: z.string().email({ message: "Invalid email address for yourEmail" }),
    yourName: z.string().min(1, { message: "Your name is required" }),
    friendName: z.string().min(1, { message: "Friend's name is required" }),
    friendEmail: z.string().email({ message: "Invalid email address for friendEmail" }),
});

module.exports = referralBody;
