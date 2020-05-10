const express = require('express'); 
const app = express();
const port = 3000;

const padraoRouter = require('./routes/padrao.route');

app.use(express.json());
app.use(padraoRouter);
app.listen(port);