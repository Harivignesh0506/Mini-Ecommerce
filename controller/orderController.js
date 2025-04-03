
const orderModel = require('../modles/orderModel')


// create order-/api/v1/order
exports.CreateOrder = async(req,res)=>{

//   console.log(req.body, "DATA");

const cartItems = req.body;
const amount = Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed();
const status= 'pending';

    console.log(amount,'AMOUNT');
 const order= await orderModel.create({cartItems,amount,status})
    res.json({
        success:true,
        order
    })
};



