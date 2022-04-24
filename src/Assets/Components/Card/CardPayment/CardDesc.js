import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import '../CardPayment/CardDesc.css'

export const CardDesc = (props) => {
  return (
    <div>
<Card className='desccard'>
        <Card.Body>
            <h6><strong>Tentang Paket</strong></h6>
            <h6>Include</h6>
            <p className='descp'>
            • Apa saja yang termasuk dalam paket misal durasi max 12 jam 
            </p>

            <p className='descp'>
            • Sudah termasuk bensin selama 12 jam 
            </p>
            
            <p className='descp'>
            • Sudah termasuk Tiket Wisata 
            </p>

            <p className='descp'>
            • Sudah termasuk pajak
            </p>

            <br/>

            <h6>Exclude</h6>
            <p className='descp'>
            • Tidak termasuk biaya makan sopir Rp 75.000/hari
            </p>

            <p className='descp'>
            • Jika overtime lebih dari 12 jam akan ada perubahan biaya Rp 20.000/jam 
            </p>
            
            <p className='descp'>
            • Tidak termasuk akomodasi penginapan 
            </p>

            <br/>

            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header><h6><strong>Refund, Reschedule, Overtime</strong></h6></Accordion.Header>
    <Accordion.Body>
            <p className='descp'>
            • Tidak termasuk biaya makan sopir Rp 75.000/hari
            </p>

            <p className='descp'>
            • Jika overtime lebih dari 12 jam akan ada perubahan biaya Rp 20.000/jam 
            </p>
            
            <p className='descp'>
            • Tidak termasuk akomodasi penginapan 
            </p>
            <p className='descp'>
            • Tidak termasuk biaya makan sopir Rp 75.000/hari
            </p>

            <p className='descp'>
            • Jika overtime lebih dari 12 jam akan ada perubahan biaya Rp 20.000/jam 
            </p>
            
            <p className='descp'>
            • Tidak termasuk akomodasi penginapan 
            </p>
            <p className='descp'>
            • Tidak termasuk biaya makan sopir Rp 75.000/hari
            </p>

            <p className='descp'>
            • Jika overtime lebih dari 12 jam akan ada perubahan biaya Rp 20.000/jam 
            </p>
            
            <p className='descp'>
            • Tidak termasuk akomodasi penginapan 
            </p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </Card.Body>
</Card>
<Button onClick={props.nextPage} className='btnpay' variant="success">Lanjutkan Pembayaran</Button>
    </div>
  )
}
