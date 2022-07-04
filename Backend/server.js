const express = require("express");
const app= express();
app.use(express.json());
const port = process.env.PORT || 3000;

const {PrismaClient}= require("@prisma/client");
const prisma = new PrismaClient();

const cors = require("cors");
const corsOptions={
    origin:"http://10.0.2.2:3000/usuarios"
}
app.use(cors(corsOptions));

app.get("/",async(req,res)=>{
    res.json({message:"Here"});
});
app.listen(port,()=>{
    console.log(`Listening Port: ${port}`)
});

// Get
app.get("/usuarios",async(req,res)=>{
    const alluser=await prisma.usuarios.findMany({});
    res.json(alluser);
})
// Post
app.post("/usuarios",async(req,res)=>{
    const usuario={
        username:req.body.username,
        Password:req.body.Password,
        nombre:req.body.nombre,
        ApellidoP:req.body.ApellidoP,
        ApellidoM:req.body.ApellidoM,
        Correo:req.body.Correo,
        rol:req.body.rol
    }
    const message= "Usuario Creado";
    await prisma.usuarios.create({data:usuario});
    return res.json({message});
})