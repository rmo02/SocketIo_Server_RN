const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//tabela usuarios
const Users = new Schema({
    name: String, 
    phoneNumber: String,
    profileImage: {
        type: String,
        default: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
    },
    about: String,
    selectedCountry: {
        type: Object
    }
})

module.exports = mongoose.model("users", Users)