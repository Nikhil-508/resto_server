import mongoose from "mongoose";



const MenuSchema = new mongoose.Schema(
    {
  menuName: { 
    type: String, 
    required: true 
},
  description: { 
    type: String 
},
});

const menu =  mongoose.model("Menu", MenuSchema);
export default menu