import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Autoplay, Pagination, EffectFade, EffectCreative, EffectFlip,EffectCoverflow, EffectCards } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';

import catalogsData from '../../public/img/heroSlider/catalogsData';

const HeroSlider = () => {
    return (
        <>
            <div className='w-[95%] left-12  mx-auto h-screen relative'>
                <Swiper
                    modules={[Pagination, Autoplay, EffectCards, EffectCoverflow, EffectFade, EffectCreative, EffectFlip]}
                    effect="cards"
                    autoplay={{ delay: 3000 }}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    grabCursor={true}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className='my-slide'>
                        <img src="/img/heroSlider/slider-1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='my-slide'>
                        <img src="/img/heroSlider/slider-2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='my-slide'>
                        <img src="/img/heroSlider/slider-3.jpg" alt="" />
                    </SwiperSlide>

                    ...
                </Swiper>

                <div className='catalog absolute top-20 z-50 flex flex-col items-center w-full'>
                    <div className='flex space-x-10 justify-center w-full h-32'>
                        {catalogsData.map((catalog) => {
                            return (
                                <div key={catalog.name} className='h-28 w-24 flex flex-col justify-between items-center'>
                                    <img className='h-16 ' src={catalog.url} alt="NA" />
                                    <p className='text-white font-semibold' >{catalog.name.toUpperCase()}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className='absolute top-80 text-center text-white'>
                        <h1 className='text-7xl font-[KaushanFont]'>The Pizza</h1>
                        <p className='text-2xl mt-8' >Delicious and Tasty Pizzas by Expert Chefs</p>
                    </div>

                </div>
            </div >
        </>
    )
}

export default HeroSlider