const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY;

const { SendSmtpEmail } = require('sib-api-v3-sdk');

require('dotenv').config({ path: '../config/.env' });


const sendEmailReinitPassword = async (email, resetToken) => {
    // Configurez l'API de SendingBlue avec vos informations d'authentification
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    apiInstance.apiKey = apiKey;

    // Construisez l'email
    const sendSmtpEmail = new SendSmtpEmail();
    sendSmtpEmail.sender = { email: 'manyScan@email.com', name: 'Many_Scan' };
    sendSmtpEmail.to = [{ email }];
    sendSmtpEmail.subject = 'Réinitialisation de mot de passe';
    sendSmtpEmail.templateId = 23;
    // sendSmtpEmail.htmlContent = `
    //     <p>Bonjour,</p>
    //     <p>Vous avez demandé une réinitialisation de mot de passe. Veuillez cliquer sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
    //     <p><a href="http://manyScan.com/reset-password/${resetToken}">Réinitialiser le mot de passe</a></p>
    //     <p>Ce lien expirera dans une heure.</p>
    //     <p>Cordialement,</p>
    //     <p>Votre équipe</p>
    // `;

    // Envoyez l'email via l'API SendingBlue
    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Email sending failed:', error);
    }
};

module.exports = sendEmailReinitPassword ;