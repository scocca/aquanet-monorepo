const app = require('./app/app');
const port = process.env.PORT || 2727;
const { dbConnection } = require('./database/conexionBlog');

app.listen(port, () => console.log(`Server conectado y corriendo ${port}`));
dbConnection();