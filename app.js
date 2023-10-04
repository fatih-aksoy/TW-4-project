//! import necessary modules
const express = require("express");

//! Create an Express application
const app = express();

//! define the logRequest middleware
function logRequest(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
//! Use the logRequest middleware for all routes
app.use(logRequest);

//! Define a route

app.get("/", (req, res) => {
  res.send("Hello everyone! How is going on?");
});

/******************************************/
// app.get("/sum", (req, res) => {
//   const { number1, number2 } = req.query;
//   const sum = parseInt(number1) + parseInt(number2);
//   res.send(`The sum of ${number1} and ${number2} is ${sum} `);
// });

//? http://localhost:3000/sum?number1=5&number2=7
//! Bu işlev, /sum yoluna gelen GET isteğini işler ve istek nesnesinden num1 ve num2 sorgu parametrelerini nesne yıkımı kullanarak çıkarır. Ardından, parametreleri parseInt işlevini kullanarak tamsayılara dönüştürür ve bunların toplamını hesaplar.
/******************************************/

//! Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
