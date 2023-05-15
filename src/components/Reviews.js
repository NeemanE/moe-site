import React from 'react';
import { Carousel } from 'react-bootstrap';

const Reviews = () => {
  return (
    <Carousel interval={5000} pause="hover" nextLabel="" prevLabel="">
      <Carousel.Item>
        <h3>Review 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
      <Carousel.Item>
        <h3>Review 2</h3>
        <p>Nulla quis lorem ut libero malesuada feugiat.</p>
      </Carousel.Item>
      <Carousel.Item>
        <h3>Review 3</h3>
        <p>Phasellus gravida semper nisi, et scelerisque tortor.</p>
      </Carousel.Item>
      <Carousel.Item>
        <h3>Review 4</h3>
        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
      </Carousel.Item>
    </Carousel>
  );
};

export default Reviews;
