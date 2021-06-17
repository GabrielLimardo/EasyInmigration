const express = require('express');
const app = express();
const session = require("express-session");
const cors = require('cors');
var cookieParser = require('cookie-parser');
const homeRoutes = require('./routes/index');
const registerRoutes = require("./routes/register");
const perfilRoutes = require("./routes/perfil");
const carritoRoutes = require("./routes/carrito.js");
const listaRoutes = require("./routes/lista.js");



app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); 
app.use(session({secret: 'miapp'}));
app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(cookieParser());
app.use(cors());





app.listen(3000, function() {
    console.log('-----------------------No error is running on 3000---------------------');
    console.log('<------------------------------------------------------------------------->');
    console.log("Esta parte de mi vida, este pequeño momento de mi vida lo llamo felicidad.");
  
})

app.use('/', homeRoutes);
app.use('/register', registerRoutes);
app.use("/perfil", perfilRoutes);
app.use("/carrito", carritoRoutes);
app.use("/lista", listaRoutes);


