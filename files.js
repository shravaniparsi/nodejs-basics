const fs = require("fs");

// creating files
fs.appendFile("mynewfile1.txt", "Hello content!", function(err) {
  if (err) throw err;
  console.log("Saved!");
});

// reading files
fs.readFile("mynewfile1.txt", (err, res) => {
  if (err) console.log("error", err);
  console.log(res.toString());
});

//deleting files
// fs.unlink("mynewfile1.txt", err => {
//   if (err) console.log("error", err);
//   console.log("File deleted!");
// });
