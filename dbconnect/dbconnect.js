import mongoose from "mongoose";
export async function DBConnect(){
    const connect = await mongoose.connect("mongodb+srv://root:root@cluster0.sguhuyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    if(connect){
        console.log('DB connected');
    }else{
        console.log("DB NOT CONNECTED");
    }
}

