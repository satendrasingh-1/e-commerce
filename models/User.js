import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        // default: () => new mongoose.Types.ObjectId().toString(),
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    imageUrl: {
        type: string,
        required: true,
    },
    cartItems: {
        type: Object,
        default: {},
    },
    
}, {
    timestamps: true,
    minimize: false,
}); 

const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;

// const connectDB = async () => {
//     try {
//         if (mongoose.connection.readyState >= 1) {
//             return;
//         }
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("MongoDB connected successfully");
//     } catch (error) {
//         console.error("MongoDB connection failed:", error);
//         throw new Error("MongoDB connection failed");
//     }
// }