import DeadProduct from "../models/deadAndRecycle.model.js";

//Add New Donation By User
 export async function createDonation(data) {
    const donation = new DeadProduct(data);
    return await donation.save();
  }

  //Seeing All Donation for Admin
export async function getAllDonations()
{
    return await DeadProduct.find();
}

//Seeing All Donation by userId for User
export async function getDonationById(id) {
    return await DeadProduct.findById(id);
  }

  //Update Donation Status By Admin
 export  async function updateDonationStatus(id, updateData) {
    return await DeadProduct.findByIdAndUpdate(id, updateData, { new: true });
  }

  //By USer Delete Donation
  export async function removeDonation(id)
  {
    return await DeadProduct.findByIdAndDelete(id);
  }

  export const donationService = ()=>{}