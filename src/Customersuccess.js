import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import customer from './trackhrimg/trackhrimg/depositphotos_178758400-stock-ph.jpg'

const Customersuccess = () => {
  return (
    <div className=' container'>
        <h3 className='margin-data-1'> Customer Success Stories</h3>

        <p className='para-3'>Don't just take our word for it.
             Hear from organizations like yours
             that have transformed their HR processes with Track HR.
              Read their success stories and learn how they achieved
              significant improvements in employee satisfaction and
               operational efficiency.</p>
        <div className='row'>
<div className='col-lg-3'>
<div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={customer} />
      <Card.Body>
        <Card.Title>Customer </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
</div>
</div>
<div className='col-lg-3'>
<div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={customer} />
      <Card.Body>
        <Card.Title>Customer </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
</div>
</div>
<div className='col-lg-3'>
<div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={customer} />
      <Card.Body>
        <Card.Title>Customer </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
</div>
</div>
<div className='col-lg-3'>
<div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={customer} />
      <Card.Body>
        <Card.Title>Customer </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
</div>
</div>

<div className='para-1 margin-data-1'>
    <h3 className='mb-3' >Take Action Today</h3>
   <p> Ready to unlock the full potential of your workforce? Get started with Track HR today! Schedule a demo or contact us for more information on how Track HR can tailor-fit solutions for your organization's needs.</p>
</div>
        </div>
    </div>
  )
}

export default Customersuccess