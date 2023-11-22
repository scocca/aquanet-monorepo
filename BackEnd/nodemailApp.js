const express = require('express');
const nodemailApp= express();
const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "aquanet2024@gmail.com",
      password: "dzbf zwmj mjwr ugzm",
    },
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
  });
 
  transporter.verify().then(() => {

    console.log("Listo para enviar email");
  
  });
 
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
  
}
};





 