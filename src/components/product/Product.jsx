import React from 'react'
import './product.css'

import {Button} from '../../ui'

export default function Product({img, title, address, price}) {
  return (
    <div className="product">
        <img src={img} alt="product" className="product__img" />
        <h3 className="product__title">{title}</h3>
        <p className="product__address">{address}</p>
        <p className="product__price">{price}</p>
        <Button height='10px' width='16px' size='15px'>Заказать</Button>
    </div>
  )
}
