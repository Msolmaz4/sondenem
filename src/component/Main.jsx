
import React, {  useState } from 'react'
import Input from './Input'
import { data } from '../data'
import PostCard from './PostCard'

const Main = () => {

const [datal,setDatal] = useState(data)

const selectCat =(e,category)=>{
  e.preventDefault()
  if(category === 'all'){
    setDatal(data)
  }else{

    let fil = data.filter((el)=>el.category === category)
    setDatal(fil)

  }

}
  


  return (
    <>
    <Input
    selectCat={selectCat}
    
    />
    <div>

    <div>
{
  datal.map((e)=>(
    <PostCard
    ImgUrl={e.image}
    title={e.title}
    rating={e.rating}
    price={e.price}
    id={e.product_id}
    />

  ))
 
}
</div>


    </div>
    
    
    
    
    
    </>
  )
}

export default Main