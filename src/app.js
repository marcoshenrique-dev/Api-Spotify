const express = require('express'); 
const app = express();
const port = 3000;

const padraoRouter = require('./routes/padrao.route');
const usuarioRouter = require('./routes/usuario.route');
const musicasRouter = require('./routes/musicas.route');
const playlistRouter = require('./routes/playlist.route');
const favoritosRouter = require('./routes/favoritos.route');

app.use(express.json());
app.use(padraoRouter);
app.use(usuarioRouter);
app.use(musicasRouter);
app.use(playlistRouter);
app.use(favoritosRouter);
app.listen(port);