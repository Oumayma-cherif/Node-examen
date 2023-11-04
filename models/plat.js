import mongoose from "mongoose";

const plat = new mongoose.Schema({

    restaurentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurant',
        require: true,
    },
    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'menu',
        require: true,
    },

});

export default mongoose.model("plat", plat);
