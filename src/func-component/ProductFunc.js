import React from 'react'
import styled from 'styled-components'

const productFunc = (props) => {
  console.log(props)

  return (
    <ProductWrapper>
      <img src={props.avatar} alt={props.product_name} />
      <div className='ribbon'>
        <h3>{props.product_name}</h3>
      </div>

      <h5>price: {props.product_price}</h5>
    </ProductWrapper>
  )
}

export default productFunc

const ProductWrapper = styled.div`
position: relative;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);

  background-color: #828A95;
  img {
   object-fit: cover;
    width: 250px;
    height: 250px;
  }
  h3,
  h5 {
    padding: 0;
    margin: 1rem;
  }
  h3 {
   color: #fff;;
 
  }
  .ribbon {
   background-color: rgba(94,75,86,0.5);;
   
   padding:0 30px;
      position: absolute;
    top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);



  }
  }
`
