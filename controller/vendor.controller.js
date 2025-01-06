import vendorService from "../services/vendor.service.js";
export const createVendor = async (request,response) => {
    try {
        const vendorData = request.body; 
        const newVendor = await vendorService.createVendor(vendorData);
        response.status(201).json({ message: 'Vendor created successfully', vendor: newVendor });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};
