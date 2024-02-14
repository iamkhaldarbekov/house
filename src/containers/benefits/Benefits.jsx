import React from 'react'
import './benefits.css'
import benefit1 from '../../assets/img/benefit1.png'

import {Benefit} from '../../components'

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="wrapper">
        <div className="benefits__text">
          <p style={{color: '#fff', textAlign: 'center', fontSize: '28px'}}>Преимущества</p>
          <h3 className="benefits__title">Более 10 лет на рынке</h3>
          <p className="benefits__subtitle">Мы работаем для того, чтобы максимально удовлетворять потребности и обеспечить безопасность сделок с недвижимостью</p>
        </div>
        <div className="benefits__inner">
          <Benefit title='Выставление счетов' info='Создавайте счёт и отправляйте контрагенту одной кнопкой' img={benefit1} />
          <Benefit title='Выставление счетов' info='Создавайте счёт и отправляйте контрагенту одной кнопкой' img={benefit1} />
          <Benefit title='Выставление счетов' info='Создавайте счёт и отправляйте контрагенту одной кнопкой' img={benefit1} />
          <Benefit title='Выставление счетов' info='Создавайте счёт и отправляйте контрагенту одной кнопкой' img={benefit1} />
        </div>
      </div>
    </section>
  )
}
