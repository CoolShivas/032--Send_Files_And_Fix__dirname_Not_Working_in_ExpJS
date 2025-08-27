// const express = require("express");
import express, { response } from "express";

// // // Created instance for express.
const server = express();

// // // Mentioning of port number or defining it.
const PORT = 3000;

// // // Formation of HOME PAGE showing the response.
server.get("/", (request, response) => {
  response.send("<center>Hello, in the World of SHIVAJI</center>");
});

// // // Formation of ABOUT PAGE showing the response.
server.get("/about", (req, res) => {
  res.send("<h1>This is the About Page.</h1>");
});

// // // Formation of CONTACT PAGE showing the response.
server.get("/contact", (req, res) => {
  return res.send(`<div class="container">
      <h1>URL Shortner</h1>
      <form id="shorten-form">
        <div>
          <label for="url">Enter URL :-</label>
          <input type="text" name="url" id="url" required />
        </div>
        <div>
          <label for="url">Enter Short-Code :-</label>
          <input type="text" name="short" id="short" required />
        </div>
        <button type="submit">Shorten</button>
      </form>
      <h2>Shortened URLs</h2>
    </div>`);
});

// // // Running the server or port at define number.
server.listen(PORT, () => {
  console.log("server running at", PORT);
});
// // // Finally, now open the Terminal and run the ls command to check the folder and files.
// // // Then, run the command node app.js by which you will get the Output as :- server running at 3000
// // // Now, open any Browser and enter in URL as localhost:3000 or http://localhost:3000/
// // // We will get the Output on Browser Display as :- Hello, in the World of SHIVAJI
