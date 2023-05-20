import React from 'react';
import { Carousel } from 'react-bootstrap';

const Reviews = () => {
  return (

    <div className='carousel-image'>
      <Carousel interval={4000}>
        <Carousel.Item>
          <h3>Natasia</h3>
          <p>
            "When I started my journey with Protocall Financial I was skeptical. We have all heard the  stories of credit repair and I was nervous that we were going to go through the exact same thing. Protocall Financial came through in a BIG way! My credit scores went up over 140 points in just 4 months. It was such a relief to know that all the issues that have been stopping me from getting a home are now gone! Thank you guys - you are the best."
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Rachel W. <br /> Houston, Texas</h3>
          <p>"My credit score was in the 400's and after 3 months I reached over 600 credit score. Not only they helped with negative items on my credit report, but they helped me build credit along the way."</p>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Debbie <br /> SugarLand, Texas</h3>
          <p>" I had no credit history whatsoever so they recommended credit building products & I was at 680 credit score within a few months."</p>
        </Carousel.Item>
      </Carousel>
      <style jsx>{`
        .carousel-indicators,
        .carousel .carousel-control-prev,
        .carousel .carousel-control-next {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Reviews;
