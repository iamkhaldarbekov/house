import React from 'react'
import './partners.css'
import partner1 from '../../assets/img/partner1.png'
import partner2 from '../../assets/img/partner2.png'
import partner3 from '../../assets/img/partner3.png'
import partner4 from '../../assets/img/partner4.png'

export default function Partners() {
  return (
    <section className="partners">
        <div className="wrapper">
            <h3 className="partners__title">Наши партнёры</h3>
            <div className="partners__inner">
                <img src={partner1} alt="" />
                <img src={partner2} alt="" />
                <img src={partner3} alt="" />
                <img src={partner4} alt="" />
            </div>
        </div>
    </section>
  )
}
