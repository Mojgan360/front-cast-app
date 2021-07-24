import React, { useEffect, useState } from 'react'
import { data } from '../data'
import ProductsFunc from './ProductsFun'

const MainFunc = () => {
  const [products, setProducts] = useState(data)

  // const getData = () => {
  //   console.log(products)
  //   setProducts((pre) => {
  //     let tmp = []
  //     tmp = [...data]
  //     return tmp
  //   })
  // }
  // useEffect(() => {
  //   getData()
  // }, [])
  return (
    <div>
      <ProductsFunc products={products} />
    </div>
  )
}

export default MainFunc
