//DEPENDENCIES
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let db = require("../db/db.json");

// NOTE ROUTING
module.exports = (app) => {

  //get old notes


  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  //make new notes
  
  app.post("/api/notes", function (req, res) {
    const myNote = req.body;
    myNote.id = myNote.id;
    db.push(myNote);

    fs.writeFile("db/db.json", JSON.stringify(db), (err) => {
      if (err) throw err;
    });

    res.json(true);
  });

  //delete notes



  app.delete("/api/notes/:id", function (req, res) {
    const myNoteId = myNoteId;
    db = db.filter((notes, index) => {
      return myNoteId !== notes.id;
    });

    fs.writeFile("db/db.json", JSON.stringify(db), (err) => {
      if (err) throw err;
    });

    res.json(true);
  });
};



// function _uuid() {
//   var d = Date.now();
//   if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
//     d += performance.now(); //use high-precision timer if available
//   }
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//     var r = (d + Math.random() * 16) % 16 | 0;
//     d = Math.floor(d / 16);
//       return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//   });
// }