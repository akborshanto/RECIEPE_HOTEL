import React from 'react'

const Carts = ({carts,handleCarts,notify}) => {
const{recipe_image,recipe_name,short_description,ingredients,
    preparing_time,calories}=carts;

  return (
    <div>
    
    <div className="card w-96 bg-[#2828281C] shadow-xl p-6 hover:shadow-2xl hover:alert-info">
    <figure><img src={recipe_image} alt={recipe_name} className=' rounded-2xl w-[300px] h-[200px]' /></figure>
    <div className="card-body">
      <h2 className="card-title text-black">{recipe_name}</h2>
      <p className='text-[#878787] font-semibold'> {short_description.slice(0,50)}</p>

<h3 className='text-black font-semibold text-xl'>Ingredients: 6 {carts.length}</h3>

<ul>
{
    ingredients.map(equipment=> <li key={Math.random()} className=' text-[#878787] font-semibold my-4'>{equipment}</li>)

}

</ul>

<div className='flex justify-between '>

<h3 className='text-[#282828CC}'>{preparing_time}</h3>
<h3   className='text-[#282828CC} font-semibold'>{calories}</h3>

</div>


      <div className="card-actions justify-start">
        <button
         onClick={()=>{handleCarts(carts),notify}}
        className="btn bg-[#0BE58A] border-none text-black font-semibold  rounded-3xl w-40 h-10 mt-4 hover:bg-white text-xl">Buy Now</button>
      </div>
    </div>
  </div>



    </div>
  )
}

export default Carts
