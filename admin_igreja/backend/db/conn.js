/**CONEXÃO COM O BANCO DE DADOS */
const mongoose = require("mongoose");

async function main(params) {
    await mongoose.connect("mongodb://localhost:27017/admin-igreja");
    console.log("Conectado ao Mongoose");
}

main().catch((err) => console.log(err));

module.exports = mongoose;

