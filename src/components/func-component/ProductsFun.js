import React from 'react'
import ProductFunc from './ProductFunc'
import styled from 'styled-components'

const ProductsFun = ({ products }) => {
  console.log(products)

  return (
    <>
      <h3>Our Products</h3>
      <ProductsWrapper>
        {products.map((item) => {
          return (
            <section key={item.id}>
              <ProductFunc {...item} />
            </section>
          )
        })}
      </ProductsWrapper>
    </>
  )
}

export default ProductsFun
const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-width: 1140px;
  margin: 0 auto;
`
