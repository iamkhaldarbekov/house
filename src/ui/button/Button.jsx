import React from 'react'
import './button.css'

export default function Button({height, width, size, children}) {
  return (
    <button className='main-btn' style={{padding: `${height} ${width}`, fontSize: `${size}`}}>{children}</button>
  )
}