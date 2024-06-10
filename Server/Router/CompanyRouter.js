const router=require('express').Router()
const company=require('../Model/CompanySchema')
const cryptojs=require('crypto-js');
const verifyToken = require('../verifyToken');
router.post('/signin',async(req,res)=>{
    console.log("body datas",req.body);
    req.body.Password=cryptojs.AES.encrypt(req.body.Password,process.env.crypto).toString()
try{
const newUser= new company(req.body)
const datas=await newUser.save()
res.status(200).json("success")
}catch(err){
res.status(500).json("failed")
}
})
router.get('/companydata',async(req,res)=>{
    console.log("body datas",req.body);
try{
const alldatas=await company.find()
res.status(200).json(alldatas)
}catch(err){
res.status(500).json("failed")
}
})
router.delete('/deletecompanydata/:id', async (req, res) => {
  try {
    const Company = await company.findByIdAndDelete(req.params.id);
    if (!Company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (error) {
    console.error("Error deleting company:", error);
    res.status(500).json({ message: 'Error deleting company', error });
  }
});
router.get('/companydatas/:id',async(req,res)=>{
try{
const datas=await company.findById(req.params.id)
res.status(200).json(datas)
}catch(err){
res.status(500).json("failed")
}
})
router.put('/updatecompany/:id', async (req, res) => {
  console.log("req.params.id:", req.params.id);
  try {
    const updatedDetails = await company.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body }, 
      { new: true }
    );
    res.status(200).json(updatedDetails);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json("Internal server error");
  }
});
module.exports=router