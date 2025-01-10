import { Vendor } from "../models/vendor.model.js";

class VendorService {

    async createVendor(vendorData) {
        try {
            const newVendor = new Vendor(vendorData);
            await newVendor.save();
            return newVendor;
        } catch (error) {
            throw new Error('Error creating vendor: ' + error.message);
        }
    }
}

export default VendorService;