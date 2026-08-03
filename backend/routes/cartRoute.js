

import express from 'express'
import {addToCart,getUserCart,updateCart} from '../controllers/cartController.js'
const cartRouter=express.Router()
import userAuth from '../middleware/userAuth.js'

cartRouter.post('/get',userAuth,getUserCart)
cartRouter.post('/add',userAuth,addToCart)
cartRouter.post('/update',userAuth,updateCart)

export default cartRouter