const mongoose = require('mongoose');

// Schema: 관련된 정보를 하나하나 지정해주는 역할, 관계형 모델의 스키마와 같은 의미
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// model: 스키마를 감싸주는 역할
const User = mongoose.model('User',userSchema) 

module.exports = { User } // 다른곳에서 쓸 수 있도록 export 시킨다.