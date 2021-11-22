const sendEmail = require('../config/mailer');
const welcomeEmail = async (req, username, email, secretToken)=>{
    const html = `
        Welcome to  BRUMIS ${username}, we're excited to have you join us.
        <br/>
        <br/>
        You can copy and paste the following code <strong>${secretToken}</strong> in the confirmation page 
        or
        Please click on the link below to activate your account.<br/>
        Confirmation Link: http://${req.headers.host}/user/confirm-account/${secretToken}
        <br/>
        <br/>
        BRUMIS will give you the best experience ever!!!!!!
        <br/>
        <br/>
        Cheers,
        <br/>
        <strong>BRUMIS Team</strong>
    `;

    await sendEmail(
        'support@brumis.com',
        email,
        'Welcome to BRUMIS',
        html
    );
}

module.exports = welcomeEmail;