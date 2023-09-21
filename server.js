/*const http = require("http");
console.log(http);*/
// Now you can see bunch of methods in the command prompt

const http = require("http");
const fs = require("fs");

//! create server
const server = http.createServer(function (req, res) {
  //response header
  res.writeHead(200, { "content-Type": "text/html" });
  //send datat to the user
  res.write("Hello this is my first web server");
  //end the response
  res.end();
});

//console.log(server); this will give a bunch of methods in the server

//*Listen to the server
server.listen(7000, () => {
  console.log("server is up and running");
});

//create login html file
fs.writeFile(
  "login.html",
  `<div><h1>This is login Page</h1>
<p> Please provide your valid login credentials</P></div>
`,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File has been created");
    }
  }
);

//*local host: In computer networking localhost is a hostname that refers to the current device used to access it.Here, "7000 " is the port number. And we can access with the url: "http://localhost:7000"
