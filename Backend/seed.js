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
                ApellidoP:"Bustos",
                ApellidoM:"Sánchez",
                Correo:"hector@hotmail.com",
                Password:"buzo1234",
                rol:1
            }
        });
    }catch(e){
        console.error(e);
        process.exit(1);
    }finally{
        await prisma.$disconnect();
    }
})();
