const express = require('express');
const cors = require('cors');
const routes =  require('./routes');    // Já que é um arquivo e náo um pacotes uso ./

const app = express();

app.use(cors());
app.use(express.json());  // Define JSON as format
app.use(routes);


app.listen(3333);

