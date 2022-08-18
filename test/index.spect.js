// })

// describe('POST / TASK',()=>{
//     describe("Me deberia dar una descripción",()=>{
//         const newTask={
//             title:"Test-Task title",
//             description:"Test Description"
//         }

//         test('Me muestra un astatus 200 en POST',async()=>{
//             const response= await request(app).post('/tasks').send(newTask);
//             expect(response.statusCode).toBe(200);
//         })
//         test("Deberia tener un content-type: application/json in header",async()=>{
//             const response = await request(app).post("/tasks").send(newTask);
//             expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
//         })
//         test("Deberia regresar todos los ID",async()=>{
//             const response= await request(app).post('/tasks').send(newTask);
//             expect(response.body.id).toBeDefined();
//         })
//     })
//     describe("when title and description is missing",()=>{
//         const fields=[
//             {},
//             {title:"Test Task"},
//             {description:"Test Description"},
//         ]
//         test("sould respond with a 400 satus code",async()=>{
//             for(const body of fields){
//                 const response= await request(app).post("/tasks").send(body);
//                 expect(response.statusCode).toBe(400)
//             }
            
//         });
//     })
// })
// todo el programa
// Pedido
describe('Get / Pedido',()=>{
    test('Deberia de responder un status 200',async()=>{
        const response = await request(app).get('/tasks').send()
        // console.log(response);
        expect(response.statusCode).toBe(200)
    });
    test('Deberia de responder un Array donde esta toda la información',async()=>{
        const response= await request(app).get('/tasks').send();
        expect(response.body).toBeInstanceOf(Array)
    })
})
describe('Delete / Pedido',()=>{
    test('Deberia dar un status 200',async()=>{
        const response = await request(app).get('/tasks').send()
        // console.log(response);
        expect(response.statusCode).toBe(200)
    });
})
describe('PUT / Pedido',()=>{
    test('Deberia responder con un estatus 200',async()=>{
        const response = await request(app).get('/tasks').send()
        // console.log(response);
        expect(response.statusCode).toBe(200)
    });
    test('Deberia responder con un arreglo modificado',async()=>{
        const response= await request(app).get('/tasks').send();
        expect(response.body).toBeInstanceOf(Array)
    })
})
describe('POST / Pedido',()=>{
    describe("deberia dar un resultado de lo enviado",()=>{
        const newTask={
            title:"Test-Task title",
            description:"Test Description"
        }

        test('Deberia de responder un status 200',async()=>{
            const response= await request(app).post('/tasks').send(newTask);
            expect(response.statusCode).toBe(200);
        })
        test("Deberia de recibir un JSON",async()=>{
            const response = await request(app).post("/tasks").send(newTask);
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        })
        test("Deberia dar respuesta de Id o codigo del pedido",async()=>{
            const response= await request(app).post('/tasks').send(newTask);
            expect(response.body.id).toBeDefined();
        })
    })
    describe("Si falta algun elemento",()=>{
        const fields=[
            {},
            {title:"Test Task"},
            {description:"Test Description"},
        ]
        test("deberia responder un status 400 para sino esta completo",async()=>{
            for(const body of fields){
                const response= await request(app).post("/tasks").send(body);
                expect(response.statusCode).toBe(400)
            }
            
        });
    })
})

describe('Get / Usuarios',()=>{
    test('Deberia mostrar un estado 200 si regresa a lo usuarios',async()=>{
        const response = await request(app).get('/tasks').send()
        // console.log(response);
        expect(response.statusCode).toBe(200)
    });
    test('Deberia regresarme en un arreglo todos los usuarios',async()=>{
        const response= await request(app).get('/tasks').send();
        expect(response.body).toBeInstanceOf(Array)
    })
})

describe('POST / Usuario',()=>{
    describe("deberia dar un resultado de lo enviado",()=>{
        const newTask={
            title:"Test-Task title",
            description:"Test Description"
        }

        test('Deberia de responder un status 200',async()=>{
            const response= await request(app).post('/tasks').send(newTask);
            expect(response.statusCode).toBe(200);
        })
        test("Deberia de recibir un JSON",async()=>{
            const response = await request(app).post("/tasks").send(newTask);
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        })
        test("Deberia dar respuesta de Id o codigo del pedido",async()=>{
            const response= await request(app).post('/tasks').send(newTask);
            expect(response.body.id).toBeDefined();
        })
    })
    describe("Si falta algun elemento",()=>{
        const fields=[
            {},
            {title:"Test Task"},
            {description:"Test Description"},
        ]
        test("deberia responder un status 400 para sino esta completo",async()=>{
            for(const body of fields){
                const response= await request(app).post("/tasks").send(body);
                expect(response.statusCode).toBe(400)
            }
            
        });
    })
})

describe('Get / Productos',()=>{
    test('Deberia mostrar un estado 200 si regresa a los productos',async()=>{
        const response = await request(app).get('/tasks').send()
        // console.log(response);
        expect(response.statusCode).toBe(200)
    });
    test('Deberia regresarme en un arreglo todos productos',async()=>{
        const response= await request(app).get('/tasks').send();
        expect(response.body).toBeInstanceOf(Array)
    })
})

describe('POST / Productos',()=>{
    describe("deberia dar un resultado de lo enviado",()=>{
        const newTask={
            title:"Test-Task title",
            description:"Test Description"
        }

        test('Deberia de responder un status 200',async()=>{
            const response= await request(app).post('/tasks').send(newTask);
            expect(response.statusCode).toBe(200);
        })
        test("Deberia de recibir un JSON",async()=>{
            const response = await request(app).post("/tasks").send(newTask);
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        })
        test("Deberia dar respuesta de Id o codigo del pedido",async()=>{
            const response= await request(app).post('/tasks').send(newTask);
            expect(response.body.id).toBeDefined();
        })
    })
    describe("Si falta algun elemento",()=>{
        const fields=[
            {},
            {title:"Test Task"},
            {description:"Test Description"},
        ]
        test("deberia responder un status 400 para sino esta completo",async()=>{
            for(const body of fields){
                const response= await request(app).post("/tasks").send(body);
                expect(response.statusCode).toBe(400)
            }
            
        });
    })
})

describe('POST / Venta',()=>{
    describe("deberia dar un resultado de lo enviado",()=>{
        const newTask={
            title:"Test-Task title",
            description:"Test Description"
        }

        test('Deberia de responder un status 200',async()=>{
            const response= await request(app).post('/tasks').send(newTask);
            expect(response.statusCode).toBe(200);
        })
        test("Deberia de recibir un JSON",async()=>{
            const response = await request(app).post("/tasks").send(newTask);
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        })
        test("Deberia dar respuesta de Id o codigo del pedido",async()=>{
            const response= await request(app).post('/tasks').send(newTask);
            expect(response.body.id).toBeDefined();
        })
    })
    describe("Si falta que aparezca pagado despues de hacer la venta",()=>{
        const fields=[
            {},
            {title:"Test Task"},
            {description:"Test Description"},
        ]
        test("deberia responder un status 400 para sino funciona el disparador que convierte el pedido en pagado y la venta es registrada",async()=>{
            for(const body of fields){
                const response= await request(app).post("/tasks").send(body);
                expect(response.statusCode).toBe(400)
            }
            
        });
    })
})