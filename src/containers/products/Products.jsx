import React from 'react'
import './products.css'
import item1 from '../../assets/img/item1.png'
import item2 from '../../assets/img/item2.png'
import item3 from '../../assets/img/item3.png'
import item4 from '../../assets/img/item4.png'
import item5 from '../../assets/img/item5.png'
import item6 from '../../assets/img/item6.png'

import {Product} from '../../components'

export default function Products() {
  return (
    <div className="wrapper">
        <section className="products">
            <Product title='Двухкомнатная квартира' address='ул. Ленина, дом 25' img={item1} price='3 450 000 ₽' />
            <Product title='Однокомнатная квартира' address='ул. Октябрьская, дом 14' img={item2} price='2 150 000 ₽' />
            <Product title='Трехкомнатная квартира' address='ул. Варламова, дом 8' img={item3} price='3 150 000 ₽' />
            <Product title='Двухкомнатная квартира' address='ул. Ленина, дом 25' img={item4} price='3 450 000 ₽' />
            <Product title='Однокомнатная квартира' address='ул. Октябрьская, дом 14' img={item5} price='2 150 000 ₽' />
            <Product title='Трехкомнатная квартира' address='ул. Варламова, дом 8' img={item6} price='3 150 000 ₽' />
        </section>
    </div>
  )
}
