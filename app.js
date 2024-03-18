const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");
const ComentarioModel = require("./database/Comentario");

connection.authenticate().then(()=>{
    console.log(" Conectado ao banco com sucesso! ");
}).catch((msgErro) => {
    console.log(" Erro de Conexão com o banco! ");
})
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('./public/img'));
app.use(express.static('./public/css'));
app.use(express.static('./public/js'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get( "/",(req, res) => {
    res.render("index");
});

app.get("/secas", (req, res) => {
    res.render("secas");
});

app.get("/queimadas", (req, res) => {
    res.render("queimadas");
});


app.get("/secas", (req, res) => {
    res.render("secas");
});

app.get("/Prevencao", (req, res) => {
    res.render("prevencao");
});

app.get("/Referencias", (req, res) => {
    res.render("referencias");
});

app.get("/Nos", (req, res) => {
    res.render("QuemSomos");
});

app.post("/SaveComentario", (req,res)=> {
    var nome = req.body.nome;
    var textocomentario = req.body.textocomentario;
    ComentarioModel.create({
        nome : nome,
        textocomentario : textocomentario    
    }).then(()=>{
        res.redirect("/");
    })

    res.send("nome enviado !!" + " Nome:  " + nome + "  " + " Comentario:  " + textocomentario);
   

});


app.delete("/ExcluirComentario", (req,res)=>{
    res.render("#");
});

app.put("/Atualizar", (req,res)=>{
    res.render("#");
});

app.listen(8080, function(){
    console.log(" Site rodando com sucesso! ");
})






