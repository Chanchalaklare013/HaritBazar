import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    vendor_id: { type: String, required: true, unique: true },
    businessName: { type: String, required: true },
    contactPerson: { type: String, required: true },
    businessEmail: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    businessAddress: { type: String, required: true },
    productCategories: [{ type: String }],
    productPrice: { type: Number },
    stockQuantity: { type: Number },
    shippingMethod: { type: String },
    vendorRating: { type: Number, default: 0 }
});

export const Vendor = mongoose.model('Vendor', VendorSchema);
