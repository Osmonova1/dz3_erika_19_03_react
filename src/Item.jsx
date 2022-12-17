import React from 'react'

function Item(props) {
  return (
    <div>
        <img src={props.product?.url} alt="" />
        <h1>{props.product?.name}</h1>
        <h2>{props.product?.price}</h2> 
        <h3>{props.product?.currency}</h3> 
    </div>
  )
}

export default Item