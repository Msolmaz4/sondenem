
import React, {  useState } from 'react'
import Input from './Input'
import { data } from '../data'
import PostCard from './PostCard'

const Main = () => {

const [datal,setDatal] = useState(data)


  
  return (
    <>
    <Input/>
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