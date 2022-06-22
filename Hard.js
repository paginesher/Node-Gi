const express = require('express');
const app = express();
const employees = [
    {
        "id": 1,
        "name": "Pagines Her",
        "salary": "3,000,000",
        "department": "Managment"
    },
    {
        "id": 2,
        "name": " Daniel Yang ",
        "salary": "100,000",
        "department": "Tech"
    },
    {
        "id": 3,
        "name": "Jalynn W. Brewster",
        "salary": "300,000",
        "department": "Tech"
    },
    {
        "id": 4,
        "name":   "John Doe",
        "salary": "1,000,000",
        "department": "accounting"
    },
    {
        "id": 5,
        "name": "Kevin Lewis",
        "salary": "400,000",
        "department": "sanitation"
    },
    {
        "id": 6,
        "name": "Shawn Henrey ",
        "salary": "5100,000",
        "department": "Tech"
    },
    {
        "id": 7,
        "name": "Sam Smith",
        "salary": "70,000",
        "department": "Audio"
    },
    {
        "id": 8,
        "name": "Chris Rock",
        "salary": "100,000",
        "department": "IT"
    },
    {
        "id": 9,
        "name": "Jenny Lopez ",
        "salary": "50,000",
        "department": "sanitation"
    },
    {
        "id": 10,
        "name": "Kevin Lion",
        "salary": "30,000",
        "department": "Talent"
    }
];
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.get('/api/employees', (req, res) => {
    res.send(employees);
});
app.get('/api/employees/:id', (req, res) => {
    const employee = employees.find(c => c.id === parseInt(req.params.id));
    if (!employee) res.status(404).send('The employee was not found');
    res.send(employee);
});
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));














