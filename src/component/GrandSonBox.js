import React from 'react'
import { useSelector } from 'react-redux'

export default function GrandSonBox() {
  let count = useSelector((state)=>state.count) 
  return (
    <div>GrandSonBox{count}</div>
  )
}
