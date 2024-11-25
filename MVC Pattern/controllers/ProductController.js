// controllers/ProductController.js
const Product = require('../models/ProductModel');

const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();  // Fetch all products from the database
        if (!allProducts || allProducts.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }
        res.status(200).json({ success: true, products: allProducts });
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const createProduct =async(req,res)=>{
    try{
        const {name,price,description,category}=req.body;
        const newProduct=new Product({name,price,description,category});
        await newProduct.save();
        res.status(200).json({
            product:newProduct
        })
    }
    catch(err){
        res.status(500).json({
            status:false,
            message:"Internal Server Error"
        })
    }
}

const updateProduct =async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,price,description,category}=req.body;
        const updatedProduct=await Product.findByIdAndUpdate(id,{name,price,description,category},{new:true});
        res.status(200).json({
            product:updatedProduct
        })
    }
    catch(err){
        res.status(500).json({
            status:false,
            message:"Internal Server Error"
        })
    }
}

const deleteProduct =async(req,res)=>{
    try{
        const {id}=req.params;
        const deletedProduct=await Product.findByIdAndDelete(id);
        if(!deletedProduct){
            res.json({
                message:"Product not found"
            })
        }
        res.status(200).json({
            message:"Product deleted successfully",
            product:deleteProduct
        })
    }
    catch(err){
        res.status(500).json({
            status:false,
            message:"Internal Server Error"
        })
    }
}
module.exports = { getProducts, createProduct,updateProduct,deleteProduct };
