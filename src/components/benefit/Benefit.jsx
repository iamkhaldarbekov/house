import React from 'react'
import './benefit.css'

export default function Benefit({title, info, img}) {
  return (
    <div className="benefit">
        <div className="benefit__img">
            <img src={img} alt="benefit" />
        </div>
        <p className="benefit__title">{title}</p>
        <p className="benefit__info">{info}</p>
    </div>
  )
}
