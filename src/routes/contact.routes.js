import express from 'express'

const router = express.Router();

// Define a GET route for /contac
router.get ('/contacts',(req,res)=>{
    res.status(201).json({
        message:'Get all contact'
    });
});

//Define Post route
router.post ('/contacts',(req,res)=>{
    res.status(201).json({
        message:'post a contact'
    });
});

//Define Patch route
router.patch ('/contacts/:id',(req,res)=>{
    res.status(201).json({
        message:'update a contact'
    });
});


//Define Delete route
router.delete ('/contacts/:id',(req,res)=>{
    res.status(201).json({
        message:'Delete a contact'
    });
});

export default router