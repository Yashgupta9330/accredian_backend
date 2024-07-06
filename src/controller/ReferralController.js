const referralBody = require("../zod/Referral");
const { db } = require("../lib/db");
const sendVerificationEmail = require("../utils/SendVerificationEmail");

const Referral = async (req, res) => {
    try {
        // Validate request body against the schema
      
        const result = referralBody.safeParse(req.body);

        if (!result.success) {
            const validationErrors = result.error.errors.map(err => err.message);
            return res.status(400).json({ errors: validationErrors });
        }

        // Destructure validated data
        console.log("result",result)
        const { yourEmail, yourName, friendName, friendEmail } = result.data;

        // Save referral to the database
        const newReferral = await db.referral.create({
            data: { yourEmail, yourName, friendName, friendEmail },
        });

        // Send verification email to the friend
        const emailResponse = await sendVerificationEmail(friendEmail, yourName);

        // Respond with success message and created referral
        return res.status(201).json({ message: 'Referral created successfully', referral: newReferral });

    } 
    catch (error) {
        console.error('Error creating referral:', error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
};

module.exports = { Referral };
