import dotenv from "dotenv"
import { app } from "./app.js"
import connectDB from "./db/db.js"

dotenv.config({
    path:'../.env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed", err);
})