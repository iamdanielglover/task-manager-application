const nodemailer = require('nodemailer')

const user = process.env.EMAIL
const pass = process.env.PASSWORD

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user,
        pass
    }
})

const sendWelcomeEmail = (email, name) => {
    const mailOptions = {
        from: user,
        to: email,
        subject: 'Welcome to the App',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

const sendGoodbyeEmail = (email, name) => {
    const mailOptions = {
        from: user,
        to: email,
        subject: "We're sad to see you go!",
        text: `Goodbye, ${name}. I hope to see you back sometime soon!`
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}