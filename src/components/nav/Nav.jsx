import React from 'react'
import './nav.css'

import {Button} from '../../ui'

export default function Nav() {
  return (
    <nav className="nav">
        <div className="nav__inner">
            <h3 className="nav__logo">Продажа квартир</h3>
            <ul className="nav__links">
                <li><a href="#">О компании</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Помощь</a></li>
                <li><a href="#">Отзывы</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
            <p className="nav__info">Служба продаж<br />+7 495 123-45-67</p>
            <Button height='12px' width='24px' size='15px'>Заказать звонок</Button>
        </div>
    </nav>
  )
}