import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'

import Shared from './component/shared-title/Shared'
import Banner from './component/banner/Banner'
import Cart from './component/cart/Cart'
import CartCount from './component/cart/CartCount'

const App = () => {
/* cart count */
const [count,setCount]=useState(0)
/* carts */

const[item,setItem]=useState([])
  /* handle count */
const handleCart=(carts)=>{


// console.log(carts)
setItem([...item,carts])
/* count */
  setCount( count + 1)


  }

console.log(item)
  return (
    <div className=' container mx-auto'>
<Navbar></Navbar>
<Banner></Banner>
<Shared></Shared>
{/* carat-section */}

<div className=" flex justify-between mt-10 ">

<Cart handleCarts={handleCart}></Cart>




<CartCount count={count} item={item}></CartCount>
</div>


    </div>
  )
}

export default App
