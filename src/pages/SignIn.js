import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from '../Assets/Image/img_car.png'
import '../pages/signin.css'


export const SignIn = () => {
  return (
    <div className='rightside'>
<Row>
  <Col className='tulisankanan'>
    <h1><strong>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</strong></h1>
    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
  </Col>
  <Col>
  <Image src={img2}/> 
  </Col>
</Row>
    </div>
  )
}
  