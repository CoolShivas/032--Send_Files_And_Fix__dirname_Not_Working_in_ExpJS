// const express = require("express");
import express from "express";

// // // Created instance for express.
const server = express();

// // // Mentioning of port number or defining it.
const PORT = 3000;

// // // Formation of home page showing the response.
server.get("/", (request, response) => {
  response.send("<center>Hello, in the World of SHIVAJI</center>");
  // // // Automatically, ExpressJS understand itself most of the things such as (Request Method GET; Status Code 200 OK;content-type text/html; charset=utf-8;). Previously, we have to defined this things in NodeJS.
  // // // Now, stop or kill the previous server by opening Terminal and run the command (ctrl + c).
  // // // And, again run the command  node app.js to start the sever. We will get the Output on Terminal as server running at 3000
  // // // Now, open any Browser and enter in URL as localhost:3000 or http://localhost:3000/
  // // // We will get the Output on Browser Display as :- Hello, in the World of SHIVAJI

  // // // Now, open any Browser's Network Tab you will see localhost
  // // // CLick on localhost you will see Headers, Preview, Response, Initiator, Timining
  // // // CLick on Headers you will see :-
  /**
 * 
 * 
Request URL                 http://localhost:3000/
Request Method              GET
Status Code                 200 OK
Remote Address              [::1]:3000
Referrer Policy             strict-origin-when-cross-origin
 * 
 * 
 * 
connection                  keep-alive
content-length              47
content-type                text/html; charset=utf-8
date                        Wed, 27 Aug 2025 14:33:46 GMT
etag                        W/"1e-8WMfZX3zLP2yYydKJsoF+YJkFww"
keep-alive                  timeout=5
x-powered-by                Express
 * 
 */
  // // //
});

// // // Running the server or port at define number.
server.listen(PORT, () => {
  console.log("server running at", PORT);
});
// // // Finally, now open the Terminal and run the ls command to check the folder and files.
// // // Then, run the command node app.js by which you will get the Output as :- server running at 3000
// // // Now, open any Browser and enter in URL as localhost:3000 or http://localhost:3000/
// // // We will get the Output on Browser Display as :- Hello, in the World of SHIVAJI
