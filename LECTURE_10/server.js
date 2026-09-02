const express = require('express');
const app = express();
const PORT = 3000;

const students = [
    {rollno: 1, name: 'naresh', section: 'A'},
    {rollno: 2, name: 'ramesh', section: 'B'},
    {rollno: 3, name: 'suresh', section: 'C'},
    {rollno: 4, name: 'mahesh', section: 'D'},
    {rollno: 5, name: 'rajesh', section: 'E'}
];

//read operations
app.get('/students', (req, res) => {
    res.json(students);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});