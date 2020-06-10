


module.exports = {

  get : (req, res) => {

    res.status(200).send({
      "author" : "Marcos Henrique",
      "description" : "Api feita para simular um serviço como spotify"
    });
  }
}

