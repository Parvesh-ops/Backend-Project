import asyncHandler from 'express-async-handler'
import Contact from '../models/contact.model.js';

/*
-Get all contact
-  GET /api/contacts
*/
export const getContacts = asyncHandler(async (req, res) => {
    res.json({ message: 'Get all contact' });
});


/*
 -Create new contact
 -  POST /api/contacts
 */
export const creatContact = asyncHandler(async (req, res) => {
    // console.log("the request body is:", req.body);

    const { name, email, phone } = req.body   //-> middelware use in index.js

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const contact = await Contact.create({   //-> Contact is from model
        name,
        email,
        phone
    })

    res.status(201).json(contact);
});


/**
* get contact
*   GET /api/contacts/:id
*/
export const getContact = asyncHandler(async (req, res) => {
    res.json({ message: `get contact for ${req.params.id}` })
});


/**
* Update contact
*   PUT /api/contacts/:id
*/
export const updateContact = asyncHandler(async (req, res) => {
    res.json({ message: `Update a contact for ${req.params.id}` })
});


/**
 * Delete contact
 *   DELETE /api/contacts/:id
 */
export const deleteContact = asyncHandler(async (req, res) => {
    res.json({ message: ' Deteted contact' })
});



