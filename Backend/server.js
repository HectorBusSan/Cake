const express = require("express");
const app= express();
app.use(express.json());
const port = process.env.PORT || 3000;

const {PrismaClient}= require("@prisma/client");
const prisma = new PrismaClient();

// const cors = require("cors");
// const corsOptions={
//     origin:"http://localhost:3000"
// }
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