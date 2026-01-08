const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://dynnho23:hKRbkySKVIRpgdh0@cluster0.tbekl1p.mongodb.net/?appName=Cluster0"
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
