import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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
    <MainWrapper>
      <ProductsFunc products={products} />
    </MainWrapper>
  )
}

export default MainFunc
const MainWrapper = styled.div`
  background-color: #f6f7f3;
`
