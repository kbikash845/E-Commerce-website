import { useContext, useState} from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderButton.module.css';
import { Button,Modal } from 'antd';
import Cart from '../Cart/Cart';
import CartContext from '../Store/Cart-Context';



function HeaderButton() {
  const cartCtx=useContext(CartContext);
  const numberOfCartItems=cartCtx.items.reduce((currNumber,item)=>{
  return currNumber+item.amount;
},0);
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("windows",window)
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return(
    <div>
    <Button onClick={showModal} className={classes.button}>
      <span className={classes.icon}>
          <CartIcon/>
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </Button>
    <Modal title="Order Details..."  footer={null}open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Cart/>
        </Modal>
    </div>
  )
 
  
}

export default HeaderButton