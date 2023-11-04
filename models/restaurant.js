import mongoose from "mongoose";
const restaurant = new mongoose.Schema({

    nom: String,
    tel: Number,
    adresse: String

});

export default mongoose.model("restaurant", restaurant);
