// DEPENDECIES
const express = require("express");

const app = express();
const PORT =  process.env.PORT || 3000

// data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//ROUTING FOR HTML AND API

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// PORT ASSIGNMENT  LISTNER
app.listen(PORT, () => console.log(`we are listening on PORT: ${PORT}`))