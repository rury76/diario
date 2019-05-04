const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
    name: {
        type: String,
        require: [true, 'require name']
    },
    email: {
        type: String,
        require: [true, 'require email']
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
    }
});

module.exports = mongoose.model('user', UserModel);
