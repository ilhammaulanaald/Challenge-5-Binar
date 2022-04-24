import React from 'react'
import { Accordion, Button, Card, Row } from 'react-bootstrap'
import '../Card/Transfer.css'

export const Transfer = () => {
  return (
    <div>
    <Card className='desccard'>
            <Card.Body>
                <h6><strong>Pilih Bank Transfer</strong></h6>
                <p className='descp'>
                Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking
                </p>
                
                <Row className='marginbank'>
                <div className='Bank'>
                    <div className='namabank'>BCA</div>
                </div>
                <div className='namatransfer'>BCA Transfer</div>
                </Row>
                
                <Row className='marginbank'>
                <div className='Bank'>
                    <div className='namabank'>BNI</div>
                </div>
                <div className='namatransfer'>BNI Transfer</div>
                </Row>
                
                <Row className='marginbank'>
                <div className='Bank'>
                    <div className='namabank'>Mandiri</div>
                </div>
                <div className='namatransfer'>Mandiri Transfer</div>
                </Row>
            </Card.Body>
    </Card>
        </div>
      )
    }