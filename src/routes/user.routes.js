import express from 'express';

const router = express.Router();

router.post('/register',(req,res)=>{
    res.json({ message:" register user"})
})

router.post('/login',(req,res)=>{
    res.json({message: "Login user"})
})

router.get('/current',(req,res)=>{
    res.json({ message: 'Current user Information'})
})

export default router