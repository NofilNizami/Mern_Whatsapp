const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    f_name: {
        type: String,
        required: [true, 'Please Enter Name']
    },
    l_name: {
        type: String,
        required: [true, 'Please Enter Your Last Name']
    },
    email: {
        type: String,
        required: [true, 'Please Enter Your Email']
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password']
    },
    dob: {
        type: String,
        required: [true, 'Please Enter Date']
    },
    gender: {
        type: String,
        required: [true, 'Please Enter Your Gender']
    },
    image: {
        type: String,
        required: false,
        default: null
    },
    about: {
        type: String,
        required: false,
        default: "Hey there, I'm using Whatsapp 😎"
    },
    status: {
        type: Array,
        required: false,
        default: []
    },
    chatTheme: {
        type: String,
        required: false,
        default: 'https://cutewallpaper.org/22/chibi-cat-wallpapers/1020629467.jpg'
    },
    active: {
        type:Boolean,
        default: 0
    }

})

module.exports = mongoose.model('User', userSchema);