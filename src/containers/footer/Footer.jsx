import React from 'react'
import './footer.css'
import link1 from '../../assets/img/link1.svg'
import link2 from '../../assets/img/link2.svg'
import link3 from '../../assets/img/link3.svg'
import link4 from '../../assets/img/link4.svg'

import {Link} from '../../ui'

export default function Footer() {
  return (
    <footer className="footer">
        <ul className="footer__socials">
            <li><Link img={link1} /></li>
            <li><Link img={link2} /></li>
            <li><Link img={link3} /></li>
            <li><Link img={link4} /></li>
        </ul>
        <ul className="footer__links">
            <li><a href="#">О компании</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Помощь</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
        <p style={{fontSize: '15px', fontWeight: '700', color: '#fff', textAlign: 'center', marginTop: '40px'}}>© 2020 Продажа квартир</p>
    </footer>
  )
}