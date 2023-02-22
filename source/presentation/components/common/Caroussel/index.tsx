import { FC } from "react";
import { Swiper, SwiperSlide}  from "swiper/react"

interface SwiperProps{
    Items?:Array<JSX.Element>
}

export const CommonSwiper = ({Items}:SwiperProps)=>{


    return(
        <Swiper>
            {Items?.map((item)=>
                <SwiperSlide>a</SwiperSlide>
            )}

        </Swiper>
    )
};