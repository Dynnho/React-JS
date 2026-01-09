const Memory = require("../models/Memory");
const fs = require("fs");
const path = require("path");

// remove imagem antiga
const removeOldImage = (memory) => {
  const imagePath = path.join(process.cwd(), "public", memory.src);

  if (fs.existsSync(imagePath)) {
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Imagem excluída do servidor!");
      }
    });
  }
};

// cria memória
const createMemory = async (req, res) => {
  try {
    const { title, description } = req.body;

    const src = `images/${req.file.filename}`;

    if (!title || !description) {
      return res
        .status(400)
        .json({ msg: "Por favor, preencha todos os campos." });
    }

    const newMemory = new Memory({
      title,
      src,
      description,
    });

    await newMemory.save();

    res.json({ msg: "Memória criada com sucesso!", newMemory });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Ocorreu um erro!");
  }
};

// lista memórias
const getMemories = async (req, res) => {
  try {
    const memories = await Memory.find();
    res.json(memories);
  } catch (error) {
    res.status(500).send("Ocorreu um erro!");
  }
};

// pega uma memória
const getMemory = async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memoria não encontrada!" });
    }

    res.json(memory);
  } catch (error) {
    res.status(500).send("Ocorreu um erro!");
  }
};

// deleta memória
const deleteMemory = async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memoria  não encontrada!" });
    }

    removeOldImage(memory);

    await Memory.findByIdAndDelete(req.params.id);

    res.json({ msg: "Memória excluída" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocorreu um erro!");
  }
};

// atualiza memória
const updateMemory = async (req, res) => {
  try {
    const { title, description } = req.body;

    let src = null;

    if (req.file) {
      src = `images/${req.file.filename}`; // ✅ corrigido
    }

    const memory = await Memory.findById(req.params.id); // ✅ corrigido

    if (!memory) {
      return res.status(404).json({ msg: "Memória não encontrada!" });
    }

    if (src) {
      removeOldImage(memory);
    }

    const updateData = {};

    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (src) updateData.src = src;

    const updatedMemory = await Memory.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json({
      updatedMemory,
      msg: "Memória atualizada com sucesso!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocorreu um erro!");
  }
};

const toggleFavorite = async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memoria  não encontrada!" });
    }

    memory.favorite = !memory.favorite;

    await memory.save();

    await Memory.findById(req.params.id);

    res.json({ msg: "Adicionada aos favoritos", memory });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocorreu um erro!");
  }
};

const addComment = async (req, res) => {
  try {
    const { name, text } = req.body || {};

    if (!name || !text) {
      return res
        .status(400)
        .json({ msg: "Por favor, preencha todos os campos." });
    }

    const comment = { name, text };

    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memoria  não encontrada!" });
    }

    memory.comments.push(comment);

    await memory.save();

    await Memory.findById(req.params.id);

    res.json({ msg: "Comentário adicionado!", memory });
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocorreu um erro!");
  }
};

module.exports = {
  createMemory,
  getMemories,
  getMemory,
  deleteMemory,
  updateMemory,
  toggleFavorite,
  addComment,
};
