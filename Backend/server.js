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

// Get usuarios
app.get("/usuarios",async(req,res)=>{
    const alluser=await prisma.usuarios.findMany({});
    res.json(alluser);
})
// Post usuarios
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
// get usuario
app.get("/usuarios/:username",async(req,res)=>{
    const id=req.params.username;
    // console.log(user)
    // const usernames=await prisma.usuarios.findUnique({where:{username: parseInt(id)}});
    const usernames=await prisma.usuarios.findUnique({where:{username:id}});
    res.json(usernames);
})
// get usuario y contraseña
app.get("/usuarios/login/:username",async(req,res)=>{
    const username=req.params.username;
    // const Password= req.params.Password;
    const logear=await prisma.usuarios.findUnique({where:{username:username}});
    if(logear){
        if(req.params.username === logear.username && req.params.Password === logear.Password){
            res.json(logear);
        }else{
            res.json({});
            console.log("crear cuenta")
        }
    }
    // res.json(logear)
})