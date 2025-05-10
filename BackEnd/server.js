import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
const prisma = new PrismaClient();


const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 3000, "0.0.0.0");

//Rota resgatando users já salvo
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

//Rota criando novos users
app.post("/users", async (req, res) => {
  const user = await prisma.user.create({
    data: { name: req.body.name, age: req.body.age, email: req.body.email },
  });
  res.status(201).json(user);
});

//Editar users //Route params para buscar um elemento especifico;
app.put("/users/:id", async (req, res) => {
  const user = await prisma.user.update({
    where: { id: req.params.id },
    data: { name: req.body.name, age: req.body.age, email: req.body.email },
  });
  res.status(201).json(user);
});

//Rota para deletar
app.delete("/users/:id", async (req, res) => {
  await prisma.user.delete({ where: { id: req.params.id } });
  res.status(200).json({ message: "Usuário deletado com sucesso!" });
});
