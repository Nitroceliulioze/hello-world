import mongoose from 'mongoose'

const userSchema = new mongoode.Schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    city: {
        type: String,
    },
});

export default mongoose.model('user', userSchema)