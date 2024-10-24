import mongoose from "mongoose";
// import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`,
        // , {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // }
        );
        console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
        console.log('--------------------------------------------------');
        
    } catch (error) {
        console.log("MONGODB connection Failed", error);
        process.exit(1);
    }
};

export default connectDB;