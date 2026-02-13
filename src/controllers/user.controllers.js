import asyncHandler from 'express-async-handler'

/*Register user
*  POST /api/user/register
*/
export const registerUser = asyncHandler(async (req, res) => {

    res.status(201).json({ message: 'register user' })
});


/*login user
*  POST /api/user/login
*/
export const loginUser = asyncHandler(async (req, res) => {
    res.status(201).json({ message: 'login user' })
});


/*current user
*  GET /api/user/current
*/
export const currentUser = (req,res)=>{
    res.status(201).json({message:'Current user info'})
}