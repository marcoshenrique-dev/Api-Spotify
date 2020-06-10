
module.exports = {

  get: (req , res) => {
      res.status(200).send("Buscando Favoritos");
  },

  post: (req , res) => {
    res.status(200).send("Criando Favoritos");
},

put: (req , res) => {
  res.status(200).send("Editanto Favoritos");
},

delete: (req , res) => {
  res.status(200).send("Deletando Favoritos");
}

}