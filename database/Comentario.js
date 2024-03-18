const Sequelize = require('sequelize');
const connection = require('./connection');

const Comentario = connection.define('comentario', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    textocomentario: {
        type: Sequelize.TEXT,
        allowNull: false
    }

});

Comentario.sync({force: false}).then(()=>{
    console.log(" Tabela Criada com Sucesso! ");
})

module.exports = Comentario;

