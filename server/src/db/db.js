import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            process.env.MONGO_URI || "mongodb://0.0.0.0/Alpha-Backend"
        );
        console.log(`\nMongoDb connected || DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1);
    }
};


export default connectDB;