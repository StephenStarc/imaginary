import mongoose, {Mongoose} from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if(!MONGO_URI) throw new Error('MONGO_URI is not defined');

interface MongooseConnect {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnect = (global as any).mongoose;

if(!cached) {
    cached = (global as any).mongoose = {conn: null, promise: null};
}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    cached.promise = cached.promise || mongoose.connect(MONGO_URI, {
        dbName: 'imaginify',
        bufferCommands: false,
    }).then((mongoose) => {
        return mongoose;
    });
    cached.conn = await cached.promise;
    return cached.conn;
}