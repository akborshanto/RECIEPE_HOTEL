import React from 'react'

const CartCount = ({count,item}) => {
  return (
    <div className='w-[300px]'>
<h2 className='text-2xl font-bold text-black'>Want to Cook <span> {count}</span></h2>
<div className="cook-table ">
<table className="table-auto">
  <thead>
    <tr className='ml-4'>
      <th>Name</th>
      <th>Time</th>
      <th>Caleories</th>
    </tr>
  </thead>
{

item.map((item)=> {

return <>
<tbody>
<tr className='ml-4'>
<td className='ml-4'>{item.recipe_id}</td>
<td className='ml-4'>{item.recipe_name}</td>
<td className='ml-4'>{item.preparing_time}</td>
<td className='ml-4'>{item.calories}</td>
</tr>
</tbody>


</>

})

}



</table>
</div>




    </div>
  )
}

export default CartCount
