import { transporter } from "./nodemailApp";
const nodemailer = require('nodemailer');  

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
