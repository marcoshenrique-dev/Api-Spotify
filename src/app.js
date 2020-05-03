const express = require('express'); //puxando o expres
const app = express(); //setando o express
const port = 3000; //setando a porta

app.use(express.json());//setando a possibilidade de usar json

app.get('/rota' , (req , res) => { // rota

  //req -> puxar todo tipo de retorno 
  //res -> retorna

  res.status(200).send("Hello Word");//resposta

} );

app.listen(port);//colocar o servidor no ar