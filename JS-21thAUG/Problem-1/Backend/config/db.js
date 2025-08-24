import mongoose from "mongoose";

const connectDB = async () => {
try {
await mongoose.connect("mongodb://127.0.0.1:27017/service_booking", {
useNewUrlParser: true,
useUnifiedTopology: true,
});
console.log("MongoDB Connected");
} catch (error) {
console.error("DB Connection Failed", error);
process.exit(1);
}
};

export default connectDB;