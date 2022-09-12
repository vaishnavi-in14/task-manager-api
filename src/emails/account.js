const mailgun = require('mailgun-js')
const DOMAIN = 'sandboxf429a4cb9074403aafa189d050210267.mailgun.org'
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN})

const sendWelcomeEmail = (email, name) => {
  const data = {
    from: 'vaishirny1998@gmail.com',
    to: email,
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  }
  mg.messages().send(data, function (error, body) {
    console.log(error)
  })
}

const sendCancellationEmail = (email, name) => {
  const data = {
    from: 'vaishirny1998@gmail.com',
    to: email,
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. Hope to see you back soon.`
  }
  mg.messages().send(data, function (error, body) {
    console.log(error)
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}