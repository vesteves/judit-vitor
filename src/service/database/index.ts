import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose.connect(process.env.DB_URL || '');
    console.log('MongoDB Connected');
};

const db = mongoose.connection;

db.once('open', function () {
    console.log("Database connection OK");
});

export { connectDB, mongoose };