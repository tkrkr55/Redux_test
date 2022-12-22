import React from 'react'
import { useSelector } from 'react-redux'
import GrandSonBox from './GrandSonBox'

export default function Box() {
  let count = useSelector((state)=>state.count)
  return (
    <>
    <div>this is box{count}</div>
    <GrandSonBox/>
    </>
    
  )
}
