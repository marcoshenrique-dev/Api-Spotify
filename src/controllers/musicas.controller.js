
module.exports = {

  get: (req , res) => {
      res.status(200).send("buscando Musicas");
  },

  post: (req , res) => {
    res.status(200).send("Criando Musicas");
},

put: (req , res) => {
  res.status(200).send("Editanto Musicas");
}

}