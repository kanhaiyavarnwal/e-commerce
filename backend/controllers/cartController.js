import userModel from '../models/userSchema.js'



// add products to user cart
const addToCart = async(req,res)=>{
    try{
        const {userId, itemId , size} = req.body;

        const userData = await userModel.findById(userId);

         let cartData = await userData.cartData;

         if(cartData[itemId]){
            if(cartData[itemId][size]){
                quantity = cartData[itemId][size];
                quantity+=1;
            }
            else{
                quantity=1;
            }
         }else{
            cartData[itemId]={}
            cartData[itemId][size]=1
         }
         await userModel.findByIdAndUpdate(userId,{cartData});
         res.json({
            success:true,cartData,
            message:"Added to Cart",
         })
       
    }catch(err){
        console.log(err)
        res.json({success:false,message:err.message})
    }

}



const updateCart = async(req,res)=>{
    try{
        const {userId,itemId,size, quantity} =  req.body;
    const userData = await userModel.findById(userId);

         let cartData = await userData.cartData;
         cartData[itemId][size] =quantity

         await userModel.findByIdAndUpdate(userId,{cartData});
         res.json({success:true,message:"Update Your Cart"})
    }catch(err){
                console.log(err)
        res.json({success:false,message:err.message})
    }
    


    
}


// get user cart data
const getUserCart = async()=>{
    try{
        const {userId} =req.body;
        const userData = await userModel.findById(userId);

         let cartData = await userData.cartData;

         res.json({success:true,cartData})

    }catch(err){
        console.log(err)
        res.json({success:false,message:err.message})
    }
    
}

export {addToCart,updateCart,getUserCart}