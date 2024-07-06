const mailSender = require("./MailSender");

async function sendVerificationEmail(email, name) {
    try {
		const mailResponse = await mailSender(
			email,
			"Referral Email",
			`You have been Referred by ${name}`
		);
		console.log("Email sent successfully: ", mailResponse.response);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

module.exports = sendVerificationEmail;
