import mongoose from "mongoose";
const menu = new mongoose.Schema({

    nom: String,
    paysOrigin: String,
    CreatedAt: String,
    updatedAt: String,

});

export default mongoose.model("menu", menu);
