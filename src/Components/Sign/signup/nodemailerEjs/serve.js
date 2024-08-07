const { sendWelcomeEmail } = require('./mailService');

async function registerHospital(data) {
    try {
        // Your existing registration logic

        // Assuming registration was successful and you have user's email and name
        const { email, enName } = data;

        // Send a welcome email
        await sendWelcomeEmail(email, enName);

        return { status: 200 }; // Or whatever status code is appropriate
    } catch (error) {
        console.error('Error in registerHospital:', error);
        throw error;
    }
}

module.exports = { registerHospital };
