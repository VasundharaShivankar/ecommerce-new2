import {Schema, model} from "mongoose"

//Schema of user
const userSchema = new Schema({
    name: {
        type: String,             
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dob : {
        type: Date,
        required: true
    }
},{
        timestamps: true
});
const User = model("Login", userSchema);

export default User;