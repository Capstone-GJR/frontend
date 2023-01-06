import Carousel from 'react-bootstrap/Carousel';
import photo1 from "../../assets/photo1.png"

function BsCarousel() {
  return (
    <Carousel variant='dark'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BsCarousel;