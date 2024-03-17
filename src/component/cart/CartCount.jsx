import React from 'react'

const CartCount = ({count,item,handlePreparing,remove}) => {


  return (
    <div className='mx-auto  lg:mx-0 mt-6 lg:mt-0 w-[300px] lg:w-[550px]'>
 
<h2 className='text-3xl lg:text-3xl font-bold text-[#282828] text-center'>Want to Cook <span> {count}</span></h2>
<div className="cook-table ">
<table className=" grid lg:table mt-4  " >
  <thead className=' ml-6 lg:ml-0'>
    <tr className='font-bold text-[#878787] text-2xl ml-4'>
    <th></th>
      <th>Name</th>
      <th>Time</th>
      <th>Caleories</th>
    </tr>
  </thead>
<tbody className=' ml-4 lg:ml-0'>
      
      {

        item.map((item,idx)=> {
        
        return <>
 
        <tr className="bg-white border-none font-semibold border-b-2">
        <th >{idx+ 1   }</th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time}</td>
        <td>{item.calories}</td>
    <th className='border-b-3'> <button onClick={()=>handlePreparing(item.recipe_id)} className=" translate-x-8 btn bg-[#0BE58A] border-none text-black font-semibold  rounded-3xl w-20 h-10 mt-4 hover:bg-white ">Preparing</button></th>
      </tr>

        </>      })
      
      }

 
    </tbody>
  </table>
</div>








{/* current cooking */}

<div className="bg-none mt-5 ">
<h1 className=" text-center text-black font-semibold text-2xl my-4 border-b-2 pb-4">Current Cokking:{count}</h1>



<div className="cook-table ">
<table className="grid lg:table mt-4 ">
  <thead className='ml-6 lg:ml-0'>
    <tr className='font-bold text-[#282828B3] text-xl lg:text-2xl '>
    <th>   </th>
      <th>Name</th>
      <th>Time</th>
      <th>Caleories</th>
    </tr>
  </thead>
<tbody>
      
      {

        remove.map((item,idx)=> {
        
        return <>
 
        <tr className="bg-white border-none">
        <th >{idx+ 1   }</th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time}</td>
        <td>{item.calories}</td>
      </tr>

        </>      })
      
      }

 
    </tbody>
  </table>
</div>

</div>

    </div>
  )
}

export default CartCount
