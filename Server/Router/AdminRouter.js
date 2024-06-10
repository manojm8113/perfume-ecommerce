const router=require('express').Router()
const multer  = require('multer')
const ProductSchema=require('../Model/ProductSchema')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/src/Images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null,uniqueSuffix+ file.originalname)
    }
  })
  const upload = multer({ storage: storage })
router.post('/uploadimage',upload.single("image"),async(req,res)=>{
    console.log("reqbody dtasddfghbcb",req.body);
    const {companyname,productname,price,offerprice,description} = req.body;
    const imageName = req.file.filename;
    console.log("from backend",companyname,productname,price,offerprice,description,imageName);
    try{
        if(!companyname || !productname || !price || !offerprice || !description){
            return res.status(400).json({error:"rerquired fields are missing"});
        }
      await ProductSchema.create({
        image:imageName,companyname,productname,price,offerprice,description
      })
        console.log("okesss");
        res.status({status:"ok"})
    }catch(error){
res.json({status:error})
    }
});
router.get("/getimage",async(req,res)=>{
    try{
       const data= await ProductSchema.find({})
       console.log(data);
            res.status(200).json(data)
        }catch(error){
            res.json({status:error})
        }
    }
)
router.get('/getproduct/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const product = await ProductSchema.findById(id);
      res.json(product);
  } catch (error) {
      res.status(500).send('Server error');
  }
});
router.delete('/deleteproduct/:id', async (req, res) => {
  try {
    const Product = await ProductSchema.findByIdAndDelete(req.params.id);
    if (!Product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: 'Error deleting product', error });
  }
});
module.exports=router