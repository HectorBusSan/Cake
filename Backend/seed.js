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
        const product1 = await prisma.productos.upsert({
            where:{nombre: "Pastel de Chocolate"},
            update:{},
            create:{
                nombre:"Pastel de Chocolate",
                informacion:"Succulent Cake one of the most popular and beautiful cakes that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other cakes, a characteristic known as succulence.",
                imagen: "../assets/img/example1.jpg",
                precio:39.99
            }
        });
        const product2= await prisma.productos.upsert({
            where:{nombre: "CupCakes"},
            update:{},
            create:{
                nombre:"CupCakes",
                informacion:"Dragon Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.",
                imagen: "../assets/img/example2.jpg",
                precio:29.99
            }
        });
        const product3= await prisma.productos.upsert({
            where:{nombre: "Individual de Chocolate"},
            update:{},
            create:{
                nombre:"Individual de Chocolate",
                informacion:"Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.",
                imagen: "../assets/img/example3.jpg",
                precio:25.99
            }
        });
        const product4= await prisma.productos.upsert({
            where:{nombre: "Pastel de Bodas"},
            update:{},
            create:{
                nombre:"Pastel de Bodas",
                informacion:"Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.",
                imagen: "../assets/img/example4.jpg",
                precio:25.99
            }
        });
        const product5= await prisma.productos.upsert({
            where:{nombre: "Personalizado"},
            update:{},
            create:{
                nombre:"Personalizado",
                informacion:"Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.",
                imagen: "../assets/img/example5.jpg",
                precio:25.99
            }
        });
        const product6= await prisma.productos.upsert({
            where:{nombre: "Rosca con Glaseado"},
            update:{},
            create:{
                nombre:"Rosca con Glaseado",
                informacion:"Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.",
                imagen: "../assets/img/example6.jpg",
                precio:50.99
            }
        });
    }catch(e){
        console.error(e);
        process.exit(1);
    }finally{
        await prisma.$disconnect();
    }
})();
