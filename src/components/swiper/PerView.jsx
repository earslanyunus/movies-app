import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css";
import swiperLeftArrow from '../../assets/carouse_left_arrow.svg'
import swiperRightArrow from '../../assets/carouse_right_arrow.svg'
import {NavLink} from "react-router-dom";


function PerView({items,spaceBetween,slidesPerView,extraClass='',arrows=false,isReload=false}) {
    const leftArrow = useRef()
    const rightArrow = useRef()
    return (
        <>
        <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        className={`mySwiper h-full ${extraClass}`}
        loading='lazy'
        onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = leftArrow.current;
            swiper.params.navigation.nextEl = rightArrow.current;}
        }

        navigation={{

            nextEl: rightArrow.current,
            prevEl: leftArrow.current,
        }}
        modules={[Navigation]}

        >
            {items?.map((item) => (
                <SwiperSlide key={item.id} className='h-full w-auto'>
                    <NavLink reloadDocument={isReload}  to={`/movie/${item.id}`}><img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} className='h-full' /></NavLink>
                </SwiperSlide>
            ))}


        </Swiper>
            {arrows && (
                <div className='flex gap-6 container mx-auto mt-3'>

                <button ref={leftArrow}><img  src={swiperLeftArrow} alt={'left arrow'}/></button>
                <button ref={rightArrow}><img src={swiperRightArrow} alt={'right arrow'}/></button>
                </div>
            )}
        </>


    );
}

export default PerView;