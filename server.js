const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

// DELETE request for notes
// app.delete("/api/notes/:id", (req, res) => {
//     const newNotes = [];
//     console.log("Delete Path Triggered");
//     for (let i = 0; i < notes.length; i++) {
//       const note = notes[i]; 
//       console.log("note", note.id);
//       if (note.id !== req.params.id) {
//         newNotes.push(note);
//         console.log(i);
//       }
//     }
//     fs.writeFileSync("./db/db.json", JSON.stringify(newNotes), (error) => {
//       if (error) {
//         console.log('There is an error', error);
//       } else {
//         console.log("ID was deleted");
//       }
//     })
//     console.log(newNotes);
//     res.json(newNotes);
//   });