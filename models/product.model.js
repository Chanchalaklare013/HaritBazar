import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    vendor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    image: { type: String },
    carbonFootprint: { type: Number },
    isOrganic: { type: Boolean, default: false },
    isRecycled: { type: Boolean, default: false },
    type: { type: String, enum: ['EcoFriendly', 'Reusable', 'Biodegradable'] },
    quantityAvailable: { type: Number },
    isActive: { type: Boolean, default: true }
});

export const Product = mongoose.model('Product', ProductSchema);
