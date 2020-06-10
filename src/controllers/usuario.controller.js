
module.exports = {

    get: (req , res) => {
        res.status(200).send("Autenticando Usuários");
    },

    post: (req , res) => {
      res.status(200).send("Criando Usuários");
  },

  put: (req , res) => {
    res.status(200).send("Editanto Usuários");
}

}