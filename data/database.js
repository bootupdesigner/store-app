import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI,{
            dbName:"UdemyCourse",
        });
        console.log(`Server connected to database ${connection.host}`);
    } catch (error) {
        console.log("some error occurred", error);
        process.exit(1);
    }
}