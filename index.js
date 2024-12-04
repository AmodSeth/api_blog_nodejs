import express from 'express';
import dotenv from 'dotenv';





const app = express();
dotenv.config();




const DBCREDS = process.env.DBCREDS || "amod";

app.get('/',(req,res)=>{
    res.status(200).send({
        DBCREDS
    });

})
const PORT = process.env.PORT || 3000;



app.listen(process.env.PORT,()=>{
    console.log("Server is running on port number", PORT)
})

