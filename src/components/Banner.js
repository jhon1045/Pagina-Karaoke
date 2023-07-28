import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import icon from '../assets/img/banner-wal.jpg'
import ico from '../assets/img/5053516.jpg'
import { Col, Container, Row } from 'react-bootstrap';

export function Banner() {
  return (
    <Container className='container'>
      <Row>
        <Col>
        <img src={ico} alt=''/>
        <img src={icon} alt='' />
        </Col>

        <Col>
        <Carousel className='Carousel'>
      <Carousel.Item>
        <h1>hshcsvbfbvb hdabvhbhad</h1>
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </Col>
      {/* <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    
    </Row>
    </Container>
  );
}