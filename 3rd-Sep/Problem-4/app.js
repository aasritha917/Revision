const fs = require("fs");

const folder = "students";

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
  console.log("Folder created:", folder);
}

for (let i = 1; i <= 5; i++) {
  const filePath = `${folder}/student${i}.txt`;
  fs.writeFileSync(filePath, `This is student ${i}`);
  console.log("File created:", filePath);
}

const files = fs.readdirSync(folder);
files.forEach((file) => {
  const content = fs.readFileSync(`${folder}/${file}`, "utf-8");
  console.log(`${file}: ${content}`);
});

files.forEach((file) => {
  fs.unlinkSync(`${folder}/${file}`);
  console.log("File deleted:", file);
});

fs.rmdirSync(folder);
console.log("Folder deleted:", folder);
