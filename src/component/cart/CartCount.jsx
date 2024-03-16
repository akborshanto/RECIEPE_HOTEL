import React from 'react'

const CartCount = ({count,item,handlePreparing}) => {

  return (
    <div className='w-[550px]'>
 
<h2 className='text-2xl font-bold text-black'>Want to Cook <span> {count}</span></h2>
<div className="cook-table ">
<table className="table">
  <thead>
    <tr className='font-bold text-black text-2xl '>
      <th>Name</th>
      <th>Time</th>
      <th>Caleories</th>
    </tr>
  </thead>
<tbody>
      
      {

        item.map((item,idx)=> {
        
        return <>
 
        <tr className="bg-white border-none">
        <th >{idx+ 1   }</th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time}</td>
        <td>{item.calories}</td>
    <th> <button onClick={()=>handlePreparing(item.recipe_id)} className="btn bg-[#0BE58A] border-none text-black font-semibold  rounded-3xl w-20 h-10 mt-4 hover:bg-white ">Preparing</button></th>
      </tr>

        </>      })
      
      }

 
    </tbody>
  </table>
</div>








{/* current cooking */}

<div className="bg-none mt-5">
<h1 className=" text-center text-black font-semibold text-2xl my-4 border-b-2 pb-4">Current Cokking:{count}</h1>



{/* current cokkie */}  <table className="table">


    {/* head */}
    <thead>
      <tr className='border-none'>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Clories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-white border-none">
        <th>1</th>
        <td>NAME</td>
        <td>Time</td>
        <td>Clories</td>
    
      </tr>
    </tbody>
  </table>
</div>

    </div>
  )
}

export default CartCount
