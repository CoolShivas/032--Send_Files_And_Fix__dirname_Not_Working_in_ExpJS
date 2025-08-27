const express = require("express");

// // // Created instance for express.
const server = express();

// // // Mentioning of port number or defining it.
const PORT = 3000;

// // // Formation of home page showing the response.
server.get("/", (request, response) => {
  response.send("Hello, in the World of SHIVAJI");
});

// // // Running the server or port at define number.
server.listen(PORT, () => {
  console.log("server running at", PORT);
});
// // // Finally, now open the Terminal and run the ls command to check the folder and files.
// // // Then, run the command node app.js by which you will get the Output as :- server running at 3000
// // // Now, open any Browser and enter in URL as localhost:3000 or http://localhost:3000/
// // // We will get the Output on Browser Display as :- Hello, in the World of SHIVAJI
