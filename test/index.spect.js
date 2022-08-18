import app from "./../backend/app"
import request from "supertest"

describe("GET / products",()=>{
    test("should respond with a 200 status code",async()=>{
        const response=await request(app).get("/task").send()
        console.log(response)
    })
})