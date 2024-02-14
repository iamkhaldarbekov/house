import React from 'react'
import './member.css'

export default function Member({name, info, img}) {
  return (
    <div className="member">
      <img src={img} alt="member" className="member__img" />
      <p className="member__name">{name}</p>
      <p className="member__info">{info}</p>
    </div>
  )
}