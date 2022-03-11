import React from 'react'

 const PostCard = ({ImgUrl,title,rating,id,price}) => {
  return (
    <div>


<div className="card">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <img src={ImgUrl}  className='img' alt='movies'/>
    <p className='price'>{price}$</p>

  </div>
</div>














    </div>
  )
}


export default PostCard;