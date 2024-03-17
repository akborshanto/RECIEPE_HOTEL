import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'

import Shared from './component/shared-title/Shared'
import Banner from './component/banner/Banner'
import Cart from './component/cart/Cart'
import CartCount from './component/cart/CartCount'
/* toasy fy */
import toast, { Toaster } from 'react-hot-toast';


const App = () => {
/* cart count */
const [count,setCount]=useState(0)
/* carts */

const notify = () => toast('Here is your toast.');

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
toast.error('Already Added the Product ')
}

  }

/* current item */
const [carr,setCarr]=useState([])
/* prepering button */
const [current,setCurrent]=useState(0)
const [removeValue,setRemoveValue]=useState([])
const handlePreparing=(r)=>{
const removeArr=item.filter(item => item.recipe_id !== r)

setItem(removeArr)
setCount(count - 1)
//setRemove(removeArr)
setCurrent( current + 1)
setRemoveValue(r)

}
console.log(removeValue)
// console.log(item)
  return (
    <div className=' container mx-auto'>
<Navbar></Navbar>

<Banner></Banner>

<Shared></Shared>
<Toaster  position=" top-right"
reverseOrder={false}   gutter={20} />
{/* carat-section */}

<div className=" flex justify-between flex-col p-4 lg:p-0 lg:flex-row mt-10 ">

<Cart handleCarts={handleCart} notify={notify}></Cart>




<CartCount count={count} item={item}  handlePreparing={handlePreparing} current={current} removeValue={removeValue}></CartCount>
</div>


    </div>
  )
}

export default App
