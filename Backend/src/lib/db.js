import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		console.log("MONGODB_URI:", process.env.MONGODB_URI); // should now be defined
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`Connected to MongoDB ${conn.connection.host}`);
	} catch (error) {
		console.log("Failed to connect to MongoDB", error);
		process.exit(1);
	}
};
