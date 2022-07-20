const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main(){
    try{
        const user1 = await prisma.usuarios.upsert({
            where: {username:"Administrador"},
            update:{},
            create:{
                username:"Administrador",
                nombre:"Héctor",
                ApellidoP:"Bus",
                ApellidoM:"San",
                Correo:"hector@hotmail.com",
                Password:"buzo1234",
                rol:1
            }
        });
        const user2 = await prisma.usuarios.upsert({
            where: {username:"Usuario1"},
            update:{},
            create:{
                username:"usuario1",
                nombre:"User1",
                ApellidoP:"one",
                ApellidoM:"two",
                Correo:"One@hotmail.com",
                Password:"usuario1",
                rol:2
            }
        });
    }catch(e){
        console.error(e);
        process.exit(1);
    }finally{
        await prisma.$disconnect();
    }
})();
