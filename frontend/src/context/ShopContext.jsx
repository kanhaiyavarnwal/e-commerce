import { createContext, useState,useEffect } from "react";
// import {products} from "../assets/assets"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext =  createContext()

const ShopContextProvider = (props) => {

    const currency  = '$';
    const dilevery_fee= 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL ;
    // const backendUrl = 'http://localhost:5000';
    const [search,setSearch] = useState("");
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems]=useState({});
    const navigate=useNavigate();
    const [products,setProducts] = useState([]);
    const [token,setToken] = useState('')
    
    const addToCart = async (itemId,size) =>{

      if(!size){
        toast.error("select product size");
        return;

      }
          let cartData = structuredClone(cartItems);

          if(cartData[itemId]){ 
            if(cartData[itemId][size]){
              cartData[itemId][size]+=1;
            }
            else{
              cartData[itemId][size]=1
            }
            
          }
          else{
            cartData[itemId]={};
            cartData[itemId][size]=1
          }
          setCartItems(cartData)

          if(token){
            try{
              await axios.post('http://localhost:5000/api/cart/add',{itemId,size},{headers:{token}})
            }catch(err){
              console.log(err)
              toast.error(err.message)
            }
          }
          

    }

      const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItems ){
          for( const item in cartItems[items]){
            try{
              if(cartItems[items][item]>0){
                totalCount+=cartItems[items][item];
              }
            }catch(err){

            }
          }
        }
        return totalCount;
      }

    const updateQuantity = async(itemId,size,quantity)=>{
       const cartData = structuredClone(cartItems);
       cartData[itemId][size]= quantity;
       setCartItems(cartData);
    }

    const getCartAmount= ()=>{
       let totalAmount=0;
        for(const items in cartItems){
          let itemInfo=products.find((product)=>product._id==items);
          for(const item in cartItems[items]){
            try{
                if(cartItems[items][item] >0){
                 totalAmount+=itemInfo.price * cartItems[items][item]
                }
            }catch(err){

            }
          }
        }
        return totalAmount;
    }

    const getProductsData=async()=>{
      try{
          // const response = await axios.get(backendUrl + "/api/product/list");
          const response = await axios.get("http://localhost:5000/api/product/list");
          
          if(response.data.success){
            setProducts(response.data.products)
          } else{
            toast.error(response.data.message)
          }
          
      }catch(err){
        console.log("Api err",err)
         toast.error(err.message);
      }
    }

    useEffect(()=>{
     
      getProductsData()
      
    },[])

    useEffect(()=>{
      if(!token && localStorage.getItem('token')){
          setToken(localStorage.getItem('token'))
      }
    },[])

        const value = {
            products,currency,dilevery_fee,
            search,setSearch,showSearch,setShowSearch,
            cartItems,addToCart,getCartCount,updateQuantity
            ,getCartAmount,navigate,backendUrl,setToken,token
    }
    return (
      <ShopContext.Provider value={value}>
        {props.children}
      </ShopContext.Provider> 
    )
}
export default ShopContextProvider;