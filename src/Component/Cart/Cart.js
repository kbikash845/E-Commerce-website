import React, { useContext } from 'react'
import classes from './Cart.module.css'
import CartContext from '../Store/Cart-Context';

function Cart() {

  const CartCtx=useContext(CartContext);

    const totalAmount=`${CartCtx.totalAmount.toFixed(2)}`;
    // const hasItems= CartCtx.items.length > 0;
  
    const cartItemRemoveHandler=(id)=>{
      CartCtx.removeItem(id);
    }
    // const cartItemAddHandler=(item)=>{
    //   CartCtx.addItem(item);
    // }

  const messagealert=()=>{
    alert("Thank u for purchage")
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
      {CartCtx.items.map((item)=>(
        <tr key={item.id} className={classes.main}>
          <td><img src={item.Image} alt="bikash" width="60px" height="60px"/></td>
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