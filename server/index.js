const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crudescola",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { first_name } = req.body;
  const { second_name } = req.body;
  const { cpf } = req.body;
  const { matricula } = req.body;

  let mysql = "INSERT INTO alunos ( first_name, second_name, cpf, matricula) VALUES (?, ?, ?, ?)";
  db.query(mysql, [first_name, second_name, cpf, matricula], (err, result) => {
    res.send(result);
  });
});

app.post("/search", (req, res) => {
  const { first_name } = req.body;
  const { second_name } = req.body;
  const { cpf } = req.body;
  const { matricula } = req.body;

  let mysql =
    "SELECT * from alunos WHERE first_name = ? AND second_name = ? cpf = ? AND matricula = ?";
  db.query(mysql, [first_name, second_name, cpf, matricula], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { first_name } = req.body;
  const { second_name } = req.body;
  const { cpf } = req.body;
  const { matricula } = req.body;
  let mysql = "UPDATE alunos SET first_name = ?, AND second_name = ?, cpf = ?, matricula = ? WHERE id = ?";
  db.query(mysql, [first_name, second_name, cpf, matricula, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM alunos WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});