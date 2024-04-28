import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
<<<<<<< HEAD
      dbName: "Eventify",
=======
      dbName: "eventify",
>>>>>>> 3b3e62e353fa9ce87cc03d4c98ec1cfc91a11430
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
