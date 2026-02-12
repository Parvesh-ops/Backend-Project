import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = process.env.PORT


//Test route
app.get('/',(req,res)=>{
    res.status(200).json({
        message:'Hello from backend Team!!'
    });
});



//Listen
app.listen(PORT,()=>{
      console.log(`Server is running on http://localhost:${PORT}`);
})
