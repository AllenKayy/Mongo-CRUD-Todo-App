const express = require('express');
const {json}  = require('express');
const connect = require('./config/database');
const todoRoutes = require('./routes/todoRoutes');

connect();

const app = express();
app.use("/todo", todoRoutes);
app.use(json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send('Zuri to do app with MongoDb');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });