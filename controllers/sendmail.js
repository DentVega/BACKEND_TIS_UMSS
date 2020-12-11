const sgMail = require("@sendgrid/mail");

sgMail.setApiKey("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");

const sendCredentials = async function(req, res, next) {
  const { email, userpassword } = req.body;
  const msg = {
    to: email,
    from: "villarroel24kyle@gmail.com",
    subject: "Credentials",
    text: `User email: ${email} and User password: ${userpassword}`,
    html: `<strong>User email: ${email} and User password: ${userpassword}</strong>`,
  };
  await sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
  res.status(200).json("Correctly sent");
}

const sendNotification = async function(email, message) {
  const msg = {
    to: email,
    from: "villarroel24kyle@gmail.com",
    subject: "Credentials",
    text: message,
    html: `<strong>${message}</strong>`,
  };
  await sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
}

module.exports = {
  sendCredentials,
  sendNotification
}
