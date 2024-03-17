import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'

import Shared from './component/shared-title/Shared'
import Banner from './component/banner/Banner'
import Cart from './component/cart/Cart'
import CartCount from './component/cart/CartCount'
/* toasy fy */
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
/* cart count */
const [count,setCount]=useState(0)
/* carts */
const notify = () => toast("Wow so easy!");

const[item,setItem]=useState([])
  /* handle count */
const handleCart=(carts)=>{
/* isExixt */
const isExist=item.find(items => items.recipe_id == carts.recipe_id)

if(!isExist){
// console.log(carts)
setItem([...item,carts])
/* count */
setCount( count + 1)
}else{
/* toasy fy */
toast('nadia kater')
}

  }
  const [remove,setRemove]=useState([])
/* current item */
const [carr,setCarr]=useState([])
/* prepering button */
const handlePreparing=(r)=>{
const removeArr=item.filter(item => item.recipe_id !== r)
setItem(removeArr)
setCount(count - 1)
setRemove(removeArr)
}
// console.log(item)
  return (
    <div className=' container mx-auto'>
<Navbar></Navbar>

<Banner></Banner>
<ToastContainer />
<Shared></Shared>
{/* carat-section */}

<div className=" flex justify-between mt-10 ">

<Cart handleCarts={handleCart} notify={notify}></Cart>




<CartCount count={count} item={item}  handlePreparing={handlePreparing} remove={remove}></CartCount>
</div>


    </div>
  )
}

export default App
