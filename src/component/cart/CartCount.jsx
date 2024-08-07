import React from 'react'

const CartCount = ({count,item,handlePreparing,current,removeValue}) => {
//console.log(removeValue)

  return (
    <div className='mx-auto  lg:mx-0 mt-6 lg:mt-0 w-[300px] lg:w-[550px]'>
 
<h2 className='text-3xl lg:text-3xl font-bold text-[#282828] text-center border-b-2 pb-4'>Want to Cook <span> {count}</span></h2>
<div className="cook-table ">
<table className=" grid lg:table mt-4  " >
  <thead className=' ml-6 lg:ml-0 '>
    <tr className='font-bold text-[#878787] text-2xl ml-4 border-none'>
    <th></th>
      <th>Name</th>
      <th>Time</th>
      <th>Caleories</th>
    </tr>
  </thead>
<tbody className=' ml-4 lg:ml-0'>
      
{

item.map((item,index)=>{

  return <tr className="bg-white border-none font-semibold " key={index}>
  <th >{item.recipe_id   }</th>
  <td>{item.recipe_name}</td>
  <td>{item.preparing_time}</td>
  <td>{item.calories}</td>
<th className='border-b-3'> <button onClick={()=>handlePreparing(item)} className=" :animate-ping translate-x-8 btn bg-[#0BE58A] border-none text-black font-semibold  rounded-3xl w-20 h-10 mt-4 hover:bg-white ">Preparing</button></th>
</tr>

})

  
}
 
    </tbody>
  </table>






</div>








{/* current cooking */}

<div className="bg-none mt-5 ">
<h1 className=" text-center text-black font-bold text-3xl lg:text-3xl my-4 border-b-2 pb-4">Current Cooking:{current}</h1>



<div className="cook-table ">
<table className="grid lg:table mt-4 ">
  <thead className='ml-6 lg:ml-0'>
    <tr className='font-bold text-[#282828B3] text-xl lg:text-2xl border-none '>
    <th>   </th>
      <th>Name</th>
      <th>Time</th>
      <th>Caleories</th>
    </tr>
  </thead>
<tbody>
      
{

  removeValue.map((items,index)=>{
  
    return <tr className="bg-white border-none font-semibold " key={index}>
    <th >{index+ 1   }</th>
    <td>{items.recipe_name}</td>
    <td>{items.preparing_time}</td>
    <td>{items.calories}</td>
      {/* coook item */}


  </tr>
  


  })
  
    
  }
 
    </tbody>
  </table>
</div>




</div>

    </div>
  )
}

export default CartCount
