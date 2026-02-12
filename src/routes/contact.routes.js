import express from 'express'
import { creatContact, deleteContact, getContact, updateContact } from '../controllers/contact.controllers.js';

const router = express.Router();

// Define a GET route for /contac
router.get ('/contacts',getContact);

//Define Post route
router.post ('/contacts',creatContact);

//Define Patch route
router.patch ('/contacts/:id',updateContact);


//Define Delete route
router.delete ('/contacts/:id',deleteContact);

export default router