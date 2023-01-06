import Carousel from 'react-bootstrap/Carousel';
import photo1 from "../../assets/photo1.jpeg"
import photo2 from "../../assets/photo2.jpeg";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.jpeg";
import photo5 from "../../assets/photo5.jpeg";
import photo6 from "../../assets/photo6.jpeg";

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
          src={photo2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo6}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BsCarousel;