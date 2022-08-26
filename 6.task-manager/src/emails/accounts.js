const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail
//   .send({
//     to: "ajaysankapal96@gmail.com",
//     from: "ajaysankapal5184@gmail.com",
//     subject: "This is my first creation!",
//     text: "This is my first email using sendgrid.I hope this one actually get to you.",
//     html: "<h1>This is my first email using sendgrid. I hope this one actually get to you.</h1>",
//   })
//   .then((res) => console.log("Email has been sent succesfully!!"))
//   .catch((e) => console.log(e.message));

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ajaysankapal5184@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app ${name}. Let me know how you get along with the app.`,
  });
};
const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: process.env.EMAIL,
    subject:
      "Your account has been canceled. We are really sorry to see you go!",
    text: `Hii ${name}. This email confirms your cancellation for the app. We are really sorry to see you go, but thanks for giving us a try.`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
