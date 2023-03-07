import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";


function PerView({items}) {
    return (
        <>
        <Swiper
        slidesPerView={"auto"}
        spaceBetween={12}
        className={"mySwiper h-full"}
        loading='lazy'
        >
            {items.map((item) => (
                <SwiperSlide key={item.id} className='h-full w-auto'>
                    <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} className='h-full' />
                </SwiperSlide>
            ))}


        </Swiper>
        </>


    );
}

export default PerView;