import express from 'express';
import dotenv from 'dotenv';
import contactRoute from './src/routes/contact.routes.js'
import { connectDB } from './src/config/database.config.js';
import { errorHandler } from './src/middleware/errorHandler.middelware.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT

//middleware
app.use(express.json())  // Parse JSON bodies


//Test route
app.get('/',(req,res)=>{
    res.status(200).json({
        message:'Hello from backend Team!!'
    });
});

//API routes
app.use('/api',contactRoute)


//Global ErrorHandler Middelware
app.use(errorHandler);


//Listen
app.listen(PORT,()=>{
      console.log(`Server is running on http://localhost:${PORT}`);
})
