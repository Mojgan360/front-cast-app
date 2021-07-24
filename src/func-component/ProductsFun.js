import React from 'react'
import ProductFunc from './ProductFunc'
import { data } from '../data'

const ProductsFun = ({ products }) => {
  console.log(products)

  return (
    <div>
      <h3>Our Products</h3>
      {products.map((item) => {
        return (
          <section key={item.id}>
            <ProductFunc {...item} />
          </section>
        )
      })}
    </div>
  )
}

export default ProductsFun
