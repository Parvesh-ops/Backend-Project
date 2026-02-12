

/*
-Get all contact
-  GET /api/contacts
*/
export const getContacts = (req,res) =>{
    res.json({ message: 'Get all contact'});
};


/*
 -Create new contact
 -  POST /api/contacts
 */
 export const creatContact = (req,res)=>{
    res.json({message: 'Created a new contact' })
 }

 
 /**
 * get contact
 *   GET /api/contacts/:id
 */
export const getContact = (req,res)=>{
res.json({message :`get contact for ${req.params.id}`})
}


 /**
 * Update contact
 *   PUT /api/contacts/:id
 */
 export const updateContact = (req,res)=>{
    res.json({message: `Update a contact for ${req.params.id}`})
 }


/**
 * Delete contact
 *   DELETE /api/contacts/:id
 */
export const deleteContact = (req,res)=>{
    res.json({message :' Deteted contact'})
}



