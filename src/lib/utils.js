const { default: mongoose } = require("mongoose");

const connection = {};

export const connectDB = async () => {
  try { 
    if (connection.isConnected) {
      console.log("DB connected");
      return;
    }
    const db = await mongoose.connect(process.env.DB_URL);
    console.log("DB connected");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("Error connecting db: ", error);
  }
};
