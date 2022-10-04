import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import userRoutes from "./route/userRoute.js"; 
import recipeRoutes from "./route/reciperoutes.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const port = process.env.PORT || 2000;


// routes
app.use('/user', userRoutes);
app.use('/recipe',recipeRoutes)
app.get('/', (req,res)=>{
    res.send("carry me dy go where i no know!!!")
});



app.listen(port, ()=>{
    console.log(`JavaScript  carry me dy go where i no know!! ${port}`)
});
