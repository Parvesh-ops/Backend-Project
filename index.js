import express from 'express';
import dotenv from 'dotenv';
import contactRoute from './src/routes/contact.routes.js'
import { connectDB } from './src/config/database.config.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT


//Test route
app.get('/',(req,res)=>{
    res.status(200).json({
        message:'Hello from backend Team!!'
    });
});

//API routes
app.use('/api',contactRoute)



//Listen
app.listen(PORT,()=>{
      console.log(`Server is running on http://localhost:${PORT}`);
})
