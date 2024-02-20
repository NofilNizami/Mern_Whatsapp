const AsyncHandler = require('express-async-handler');
const User = require('../models/userModels');


const registerUser = AsyncHandler (async(req, res) => {
    const {f_name, l_name, email, password, dob, gender} = req.body;

    if(!f_name || !l_name || !email || !password || !dob || !gender) {
        res.status(400);
        throw new Error('Please fill the required fields')
    }
    const createdUser = await User.create({
        f_name, l_name, email, password, dob, gender
    })

    res.send(createdUser)

})

module.exports = {
    registerUser
}