import Carousel from 'react-bootstrap/Carousel';

function Products() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div style={{height:"100px",width:"80px"}}></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div style={{height:"100px",width:"80px",border:'1px solid blue'}}></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div style={{height:"100px",width:"80px",border:'1px solid pink'}}></div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{height:"100px",width:"80px",border:'1px solid yellow'}}></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Products;