import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  status: { type : String , enum:["upcoming", "done", "deleted", "skipped"], default: "upcoming"},
  date : {type : Date, },
  time : {type : String, default: "NO fixed Time" }, 
  


}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);
export default Task;
