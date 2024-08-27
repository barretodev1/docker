import User from "../Models/user.js";
import crypto from "node:crypto";

export const createUser = async (req, res) => {
  try {
    const userTocreate = {
      id: crypto.randomUUID(),
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    };

    const user = await User.create(userTocreate);
    res.status(201).json({ message: "USUÁRIO CRIADO" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "E-mail adicionado já existente, por favor, troque" });
  }
};

export const deleteUsers = async (req, res) => {
    try {
    const userDeleted = await User.destroy({
    where: {
        id: req.body.id,
    }
  })
  res.status(200).json({ message: "OK, DEU CERTO USUÁRIO DELETADO" });
  } catch(error) {
    res.status(400).json({ message: "ERRO AO DELETAR USUÁRIO" });
  }
};

export const getAllUsers = async (req, res) => {
    const myUsers = await User.findAll();  
    res.status(200).json(myUsers);
};
