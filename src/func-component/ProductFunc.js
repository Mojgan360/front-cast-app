import React from 'react'
import styled from 'styled-components'

const productFunc = (props) => {
  console.log(props)

  return (
    <ProductWrapper>
      <h4>Our Product</h4>

      <img src={props.avatar} alt={props.product_name} />

      <h6>{props.product_name}</h6>
      <h6>price: {props.product_price}</h6>
    </ProductWrapper>
  )
}

export default productFunc

const ProductWrapper = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`
