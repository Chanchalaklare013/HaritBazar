import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true },
    subCategory: { type: String }
});

export const Category = mongoose.model('Category', CategorySchema);
