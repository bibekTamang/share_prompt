import mongoose from "mongoose";

let isConected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConected) {
    console.log("MongoDB is already Connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "techNotesDB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
