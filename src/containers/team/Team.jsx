import React from 'react'
import './team.css'
import member1 from '../../assets/img/member1.png'
import member2 from '../../assets/img/member2.png'
import member3 from '../../assets/img/member3.png'
import member4 from '../../assets/img/member4.png'

import {Member} from '../../components'

export default function Team() {
  return (
    <section className="team">
      <div className="wrapper">
        <div className="team__text">
          <p style={{color: '#FFA400', textAlign: 'center', fontSize: '28px'}}>Команда</p>
          <h3 className="team__title">Наши специалисты</h3>
          <p className="team__subtitle">Наша команда готова помочь решить Вам любую задачу с недвижимостью. Обращайтесь</p>
        </div>
        <div className="team__inner">
          <Member name='Имя Фамилия' info='Описание' img={member1} />
          <Member name='Имя Фамилия' info='Описание' img={member2} />
          <Member name='Имя Фамилия' info='Описание' img={member3} />
          <Member name='Имя Фамилия' info='Описание' img={member4} />
        </div>
      </div>
    </section>
  )
}
