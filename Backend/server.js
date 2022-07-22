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
app.post("/usuarios/login",async(req,res)=>{
    const {username,Password}= req.body;
    const logear=await prisma.usuarios.findUnique({where:{username:username}});
    if(logear){
        // console.log("registrado");
        if(Password===logear.Password){
            // console.log("Logeado");
            console.log(logear)
            // const message= "Usuario Encontrado";
            return res.json(logear)
        }else{
            const message= "Contraseña Incorrecta";
            // console.log("No logeado")
            return res.json(null)
            // return null
        }
    }else{
        const message= "No Existe el usuario";
        console.log("Registrate");
        return res.json(null)
        // return  null
    }
})

// Productos
app.post("/productos",async(req,res)=>{
    const producto={
        nombre:req.body.nombre,
        informacion:req.body.informacion,
        imagen:req.body.imagen,
        precio:req.body.precio,
    }
    const message="Producto Creado";
    await prisma.productos.create({data:producto});
    return res.json({message});
})
app.get("/productos",async(req,res)=>{
    const allproducts=await prisma.productos.findMany({});
    return res.json(allproducts);
})