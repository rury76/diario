const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniquevalidator = require('mongoose-unique-validator');
mongoose.set('useCreateIndex', true);

const UserModel = new Schema({
    name: {
        type: String,
        require: [true, 'require name']
    },
    email: {
        type: String,
        require: [true, 'require email'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'require password']
    },
    image: {
      type: String,
      default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    seed: {
        type: String,
        require: true
    },
    userole: {
        type: String,
        default: 'USER_ROLE',
        enum: {
            values: ['USER_ROLE', 'ADMIN_ROLE'],
            message: '{VALUE} no es un rol válido.'
        }
    }
});



UserModel.plugin(uniquevalidator, {message: '{PATH} El correo ya existe'});

module.exports = mongoose.model('user', UserModel);
