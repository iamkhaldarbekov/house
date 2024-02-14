import React from 'react'
import './header.css'
import bg from '../../assets/img/bg_header.png'

import {Nav} from '../../components'
import {Button} from '../../ui'

export default function Header() {
  return (
    <header className='header'>
        <Nav />
        <div className="header__inner">
          <div className="wrapper">
            <div className="header__info">
              <div className="header__text">
                <h3 className="header__title">Купите квартиру своей мечты</h3>
                <p className="header__subtitle">Мы продаём прекрасные квартиры в вашем городе. Оставьте заявку или ознакомьтесь с предложениями</p>
              </div>
              <div className="header__block">
                <p style={{fontSize: '18px', marginBottom: '16px'}}>Ищите квартиру?<br />Оставьте заявку на подбор квартиры прямо сейчас и мы поможем!</p>
                <Button width='100px' height='16px' size='18px'>Оставить заявку</Button>
                <p style={{color: 'rgba(0, 0, 0, 0, 0.4)', marginTop: '24px'}}>от 15 дней пробный период</p>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}