
module.exports = {

  get: (req , res) => {
      res.status(200).send("Buscando Playlist");
  },

  post: (req , res) => {
    res.status(200).send("Criando Playlist");
},

put: (req , res) => {
  res.status(200).send("Editanto Playlist");
},

delete: (req , res) => {
  res.status(200).send("Deletando Playlist");
}

}