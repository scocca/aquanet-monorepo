const nodemailer = require('nodemailer');   

 const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "aquanet2024@gmail.com",
      password: "dzbfzwmjmjwrugzm",
    },
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
  });

  transporter.sendConfirmacionMail({

    from: "AquaNet2024@gmail.com",
    to: "maratoro1155@gmail.com",
    subject: "Confirmación de cuenta",
    text: `
      Hola, ${user.name} 

      ¡Gracias por registrarte en AquaNet!

      Tu cuenta ha sido creada con éxito.Ahora puedes comenzar a usar nuestra red social.
      Si tienes alguna pregunta, no dudes en contactarnos.

      Gracias,

      El equipo de AquaNet`,
  });

  console.log("Message sent: %s", info.messageId);

module.exports = {
  sendMail
};