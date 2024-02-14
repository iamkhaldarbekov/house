import React from 'react'
import './about.css'

import {Button} from '../../ui'

export default function About() {
  return (
    <section className="about">
        <div className="wrapper">
            <div className="about__text">
                <p style={{color: '#FFA400', textAlign: 'center', fontSize: '28px'}}>О компании</p>
                <h3 className="about__title">8 лет мы помогаем вам заключать сделки с недвижимостью</h3>
                <p className="about__subtitle">Это ваш голосовой клон AI. Мы фиксируем ваши уникальные речевые образцы, произношение и эмоциональный диапазон, чтобы создать реалистичный голос-реплику.<br /><br />Загрузите записи или выполните один из наших сценариев, чтобы создать свой собственный голос.</p>
            </div>
            <Button height='16px' width='32px' size='18px'>Больше</Button>
        </div>
    </section>
  )
}