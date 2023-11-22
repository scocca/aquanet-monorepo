  const { nodemailApp }= require('express');
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
    to: "andino32@gmail.com",
    subject: "Confirmación de cuenta",
    text: `
      Hola, 

      ¡Gracias por registrarte en AquaNet!
  
      Tu cuenta ha sido creada con éxito.Ahora puedes comenzar a usar nuestra red social.
      Si tienes alguna pregunta, no dudes en contactarnos.
      
      Gracias,
  
      El equipo de AquaNet`,
  });

 /* transporter.verify().then(() => {

    console.log("Listo para enviar email");
  
  });
 */
 /* function sendMail(mailOptions) {
    
  if (mailOptions.subject.includes("Confirmación de cuenta")) {
     transporter.sendMail(mailOptions);
    
  transporter.sendMail(mailOptions, sendConfirmacionMail);

  } else if (mailOptions.subject.includes("Notificación de seguimiento")) {
  transporter.sendMail(mailOptions,sendSeguimientoMail);
 
} else (mailOptions.subject.includes("Notificación de posteo"))
transporter.sendMail(mailOptions, sendPosteoMail);

};*/
function sendMail(mailOptions) {
  if (mailOptions.subject.includes("Confirmación de cuenta")) {
    sendConfirmacionMail(mailOptions);
  } else if (mailOptions.subject.includes("Notificación de seguimiento")) {
    sendSeguimientoMail(mailOptions);
  } else if (mailOptions.subject.includes("Notificación de posteo")) {
    sendPosteoMail(mailOptions);
  } else {
  console.log("no se pudo enviar el correo")
}
};





 