import React from 'react'
import './link.css'

export default function Link({img}) {
  return (
    <button className="link">
        <img src={img} alt="link" />
    </button>
  )
}