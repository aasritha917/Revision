const students = [
  { name: "Alice", age: 20, grade: "A", score: 85 },
  { name: "Bob", age: 22, grade: "B", score: 70 },
  { name: "Charlie", age: 23, grade: "A", score: 92 },
  { name: "David", age: 21, grade: "C", score: 60 },
  { name: "Eva", age: 20, grade: "B", score: 88 },
  { name: "Frank", age: 22, grade: "A", score: 95 },
  { name: "Grace", age: 21, grade: "C", score: 72 },
  { name: "Hannah", age: 23, grade: "B", score: 80 },
];

const filtered = students.filter(student => student.score >= 75);

console.log("Step 1: Filtered Students");
console.log(filtered);

const maxScorer = filtered.reduce((max, student) => {
  return student.score > max.score ? student : max;
}, filtered[0]);

console.log("Step 2: Maximum Scorer");
console.log(maxScorer);

const grouped = filtered.reduce((acc, student) => {
  if (!acc[student.grade]) {
    acc[student.grade] = [];
  }
  acc[student.grade].push(student);
  return acc;
}, {});

console.log("Step 3: Grouped by Grade");
console.log(grouped);

