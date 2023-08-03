import React, { useContext, useEffect, useState } from 'react'
import classes from './Cart.module.css'
import CartContext from '../Store/Cart-Context';
import axios from "axios";

function Cart() {

  const CartCtx=useContext(CartContext);
  const [cartItems, setCartItems] = useState([])

    // const hasItems= CartCtx.items.length > 0;
  
   
    // const cartItemAddHandler=(item)=>{
    //   CartCtx.addItem(item);
    // }

  const messagealert=()=>{
    alert("Thank u for purchage")
  }
 useEffect(() => {
    fetchCartItems();
  }, []);


  const enteredEmail = localStorage.getItem("email");
  const updatedEmail = enteredEmail
    ? enteredEmail.replace("@", "").replace(".", "")
    : "";

  async function fetchCartItems() {
    const response = await axios.get(
      `https://crudcrud.com/api/3fde6f8de3e448cf8d9fe027aa59732f/${updatedEmail}`
    );
    console.log(response.data);
    const cartItems = response.data.map((item) => {
      return {
        id: item._id,
        name: item.title,
        price: item.price,
        image: item.imageUrl,
        amount: item.amount,
      };
    });
    // CartCtx.setCart(cartItems); 
    setCartItems(cartItems);
    console.log(cartItems);
  }

 

  //totalAmount is calculated depend upon cartItems
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  async function cartItemRemoveHandler(id){
    await axios.delete(`https://crudcrud.com/api/3fde6f8de3e448cf8d9fe027aa59732f/${updatedEmail}/${id}`)
   
   // CartCtx.removeItem(id);
   fetchCartItems()
 }
 

 

  return (
    <div className={classes.cartContainer}>
     
    <h2 style={{textAlign:"center"}}>Cart</h2>
    <div className={classes.cartScroll}>
     <table>
      <thead>
      <tr>
          <th>Item</th>
          <th>Title</th>
          <th>Price</th>
          {/* <th>Quantity</th> */}
          <th>Remove:</th>
      </tr >
      </thead>
      <tbody>
      {cartItems.map((item)=>(
        <tr key={item.id} className={classes.main}>
          <td><img src={item.image} alt="bikash" width="60px" height="60px"/></td>
          <td>{item.name}</td>
          <td>${item.price}</td>
          {/* <td>{item.quantity}</td> */}
         <td><button  className={classes.btnRemove} onClick={() => cartItemRemoveHandler (item.id)}>Remove</button></td>
        </tr>
      ))}
        </tbody>
      </table>
      </div>
      <div className={classes.Amount}>
      <p>Total Amount :-</p>
      <p> ${totalAmount}</p>
    </div>
    <div>
      <button className={classes.purchase} onClick={messagealert}>Purchase</button>
    </div> 

  </div>
  )
}

export default Cart