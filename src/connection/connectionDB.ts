import mongoose from "mongoose";

export const ConnectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("DB is connected");
    });
    connection.on("error", (error) => {
      console.log("DB is not connected" + error);
    });
  } catch (error: any) {
    console.log("MongoDB is not connected");
  }
};
