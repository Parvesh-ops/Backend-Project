

/*
-Get all contact
-  GET /api/contacts
*/
export const getContact = (req,res) =>{
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
 * Update contact
 *   PUT /api/contacts/:id
 */
 export const updateContact = (req,res)=>{
    res.json({message: 'Update a contact'})
 }


/**
 * Delete contact
 *   DELETE /api/contacts/:id
 */
export const deleteContact = (req,res)=>{
    res.json({message :' Deteted contact'})
}



