import React from 'react';
// import image
import Image from '../assets/img/house-banner.png';

// import components
import Search from '../components/Search';

const Banner = () => {
  return <section>
    <div>
      <div>
        <h1><span>Rent</span>Your Dream House with Us.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rerum alias dolorem quos quae illo repudiandae pariatur nostrum accusantium enim ipsam, quisquam ab minus eius animi consectetur aspernatur accusamus! Beatae.
        </p>
      </div>
      {/* image */}
      <div>
        <img src={Image} alt="" />
      </div>
    </div>

  </section>;
};

export default Banner;
