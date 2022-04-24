import React from 'react'
import { Card, Col, Row, Form, Button } from 'react-bootstrap'
import '../Card/CardPembayaran.css'
import { BgUngu2 } from './BgUngu2'

export const CardPembayaran = (props) => {
  return (
    <div className='nutup'>
              <BgUngu2/>
      <Card className='kartufilter2'>
  <Card.Body>
  <h5><strong>Detail Pesananmu</strong></h5>
    <Row>
      <Col>
      <div>
          <label className='txtsupir'>Tipe Driver</label>
          <div>
              Tanpa Supir
          </div>
    </div>
  </Col>

  <Col>
  <div>
      <label className='txtsupir'>Tanggal</label>
      <div>11 Apr 2022</div>
  </div>
  </Col>

  <Col>
  <div>
      <label className='txtsupir'>Waktu Jemput/Ambil</label>
      <div>10:00 WIB</div>
  </div>
  </Col>

  <Col>
  <div>
          <label className='txtsupir'>Jumlah Penumpang (opsional)</label>
          <div>-</div>
    </div>
  </Col>
    </Row>
  </Card.Body>
</Card>
<div>
  <div>
  </div>
</div>
    </div>
  )
}
