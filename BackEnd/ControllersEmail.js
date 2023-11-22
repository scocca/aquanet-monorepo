import { transporter } from "./nodemailApp";
const nodemailer = require('nodemailer');  

await transporter.sendConfirmacionMail({
    from: "AquaNet2024@gmail.com",
    to: "andino32@gmail.com",
    subject: "Confirmación de cuenta",
    text: `
      Hola, ${user.name}

      ¡Gracias por registrarte en AquaNet!
  
      Tu cuenta ha sido creada con éxito.Ahora puedes comenzar a usar nuestra red social.
      Si tienes alguna pregunta, no dudes en contactarnos.
      
      Gracias,
  
      El equipo de AquaNet`,
  });

  await transporter.sendSeguimientoMail({
    from: "AquaNet2024@gmail.com",
    to: user.useremail,
    subject:"Notificación de seguimiento",
    text: `
      Estimado, ${user.name}

      Te informamos que ${user.name} te ha empezado a seguir.
      
      Ahora podrás recibir notificaciones cuando la ONG realice posts.

      Atentamente, 
      El equipo de AquaNet`,
  });
 
  await transporter.sendPosteoMail({
    from: "AquaNet2024@gmail.com",
    to: user.useremail,
    subject:"Notificación de posteo",
    text: `
      Estimado, ${user.name}

      Te informamos que ${user.name} ha publicado un post.
      
      Presiona el link para dirijirte a la página.

      {link de la página chikos}

      Atentamente, 
      El equipo de AquaNet`,
  });

