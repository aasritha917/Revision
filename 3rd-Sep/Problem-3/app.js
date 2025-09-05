const fs = require("fs");
const file = "notes.txt";

function addNote(note) {
  fs.appendFileSync(file, note + "\n");
  console.log("Note added:", note);
}

function listNotes() {
  if (!fs.existsSync(file)) {
    console.log("No notes found.");
    return;
  }
  const data = fs.readFileSync(file, "utf-8").trim();
  if (!data) {
    console.log("No notes found.");
    return;
  }
  const notes = data.split("\n");
  notes.forEach((n, i) => console.log(`${i + 1}. ${n}`));
}

function deleteNote(lineNumber) {
  if (!fs.existsSync(file)) {
    console.log("No notes found.");
    return;
  }
  const data = fs.readFileSync(file, "utf-8").trim();
  if (!data) {
    console.log("No notes found.");
    return;
  }
  const notes = data.split("\n");
  if (lineNumber < 1 || lineNumber > notes.length) {
    console.log("Invalid note number.");
    return;
  }
  notes.splice(lineNumber - 1, 1);
  fs.writeFileSync(file, notes.join("\n") + (notes.length ? "\n" : ""));
  console.log(`Deleted note ${lineNumber}`);
}

const [,, command, ...args] = process.argv;

if (command === "add") {
  const note = args.join(" ");
  if (!note) {
    console.log("Please provide a note.");
  } else {
    addNote(note);
  }
} else if (command === "list") {
  listNotes();
} else if (command === "delete") {
  const lineNumber = parseInt(args[0]);
  if (isNaN(lineNumber)) {
    console.log("Please provide a valid note number.");
  } else {
    deleteNote(lineNumber);
  }
} else {
  console.log("Commands: add <note>, list, delete <number>");
}
