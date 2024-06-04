import React from 'react';
// import image
import Image from '../assets/img/house-banner.png';

// import components
import Search from '../components/Search';

const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 x1:ml-[135] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4x1 lg:text-[40px] font-semibold leading-none mb-6'>
          <span className='text-violet-700'>Achetez</span> votre maison de rêve <br/> avec nous.
        </h1>
        <p className='max-w-[480px] mb-8'>
        Bienvenue chez HomeLand, bien plus qu'une agence immobilière. Nos professionnels, rigoureusement sélectionnés à travers tout le Maroc pour leurs compétences et leurs valeurs humaines, s'engagent à faire de votre projet immobilier une expérience exceptionnelle. Que vous cherchiez à acheter,  nos AMIS sont là pour vous accompagner à chaque étape avec professionnalisme et bienveillance.
        </p>
      </div>
      {/* image */}
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt="" />
      </div>
    </div>
    <Search />
  </section>;
};

export default Banner;
