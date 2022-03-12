import React, { useState } from 'react'

 const Input = ({selectCat}) => {

const [category,setCate ] = useState()


  return (
    <div>
<form  className='input-grup mx-auto w-25 d-flex aligin-items-center mt-4 mb-4'

onSubmit={(e) =>selectCat(e,category)}>
  <select className='form-control'
  id='exampleFormControlSelect'
  onChange={(e)=>setCate(e.target.value)}
  >
    <option value='all'>ALL</option>
    <option value ='jewelery'>MENS</option>
    <option value='electronics'>ELECTRONICS</option>
    <option value ='womens cloth'>WOMENS CLOTHS</option>

  </select>
  <div className='input-grup-append'>
    <button className='btn btn-primary' type='submit'>ARA</button>
    
    </div>

</form>









    </div>
  )
}
  export default Input;