import { ProductServices } from "../services/product.service.js";

export const bulkAdd = async (request, response, next) => {
    try{
       const result = ProductServices.createBulk(request.body);
       if(result){
        response.send("Data inserted succesfully");
       } else {
        response.send("Some error ocurred while sending the data");
       }
    } catch(err){
        console.log(err);
    }
}

export const getAllProduct = async (request, response, next) => {
    try{
        const products = await ProductServices.getAllProducts();
        if(products){
            response.json({product: products});
        }else{
            response.send("error while fetching products");
        }

    }catch(err){
        console.log(err);

    }
}

export const getAllProductOfVendor = async (request, response, next) => {
    try{
        const vendorId = request.params.vendorId;
        const products = ProductServices.getAllProductsOfVendor(vendorId);
        if(products){
            response.json({product: products});
        }else{
            response.send("error while fetching products");
        }

    }catch(err){
        console.log(err);

    }
}

export const addProduct = async (request, response, next) => {
    try{
        const isAdded = await ProductServices.addProduct(request.body);
        if(isAdded){
            response.send({message: "Product added succesfully"});
        }else{
            response.send("error while adding products");
        }
      
    }catch(err){
        console.log(err);

    }
}

export const deleteProduct = async (request, response, next) => {
    try{
      const prodcutId = request.params.productId;
      const isDeleted  = await ProductServices.deleteProduct(prodcutId);

      if(isDeleted){
        response.send("product deleted successfully");
      }else{
        response.send("error while deleting")
      }
    }catch(err){
        console.log(err);

    }
}

export const updateProduct = async (request, response, next) => {
    try{
        const prodcutId = request.params.productId;
        const isUpdated  = ProductServices.updateProduct(prodcutId);
  
        if(isUpdated){
          response.send("product updated successfully");
        }else{
          response.send("error while updating")
        }
    }catch(err){
        console.log(err);

    }
}

export const productRecommendation = async (request, response, next) => {
    try{
        const prodcutId = request.params.productId;
        const recommendation  = ProductServices.getProductRecommendation(prodcutId);
  
        if(recommendation){
          response.json({product: recommendation});
        }else{
          response.send("error while getting recommendation")
        }
    }catch(err){
        console.log(err);

    }
}

export const searchProduct = async (request, response, next) => {
    try{
         const query = request.body.query;
         const searchResult = ProductServices.searchProduct(query);

         if(searchResult){
            response.json({result: searchResult});
         }else{
            response.send("No product found");
         }
    }catch(err){
        console.log(err);

    }
}
