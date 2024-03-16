import React from 'react'
import Navbar from './component/navbar/Navbar'

import Shared from './component/shared-title/Shared'
import Banner from './component/banner/Banner'
import Cart from './component/cart/Cart'
import CartCount from './component/cart/CartCount'

const App = () => {
  return (
    <div className=' container mx-auto'>
<Navbar></Navbar>
<Banner></Banner>
<Shared></Shared>
{/* carat-section */}

<div className=" flex justify-between mt-10 ">

<Cart></Cart>


<CartCount></CartCount>
</div>


    </div>
  )
}

export default App
