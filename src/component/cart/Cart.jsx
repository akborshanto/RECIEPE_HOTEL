import React, { useEffect, useState } from 'react'
import Carts from './Carts'

const Cart = ({handleCarts}) => {


/* useEffect */
  const [cart,setCart]=useState([])  
useEffect(()=>{
fetch('fakeData.json')
.then(res  => res.json())
.then(data => setCart(data))


},[])

// console.log(count)
  return (
    <div className='grid  grid-cols-1  lg:grid-cols-2 gap-20'>

{
    cart.map(carts=> <Carts carts={carts} key={Math.random()} handleCarts={handleCarts} ></Carts>)
}

    </div>
  )
}

export default Cart
