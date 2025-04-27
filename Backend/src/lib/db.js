import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
	try {
		dotenv.config();
		console.log(process.env.MONGODB_URI);
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`Connected to MongoDB ${conn.connection.host}`);
	} catch (error) {
		console.log("Failed to connect to MongoDB", error);
		process.exit(1); // 1 is failure, 0 is success
	}
};