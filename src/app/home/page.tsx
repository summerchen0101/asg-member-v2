'use client'

import AppLayout from '@/components/AppLayout'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import Marquee from 'react-fast-marquee'
import cs from 'classnames'
import { useSwiper } from 'swiper/react'
import { random } from 'lodash'
import { useState } from 'react'
import { FreeMode, Navigation, Thumbs, Swiper as SwiperType } from 'swiper'

type Props = {
  index: number
}
function SlideBtn({ index }: Props) {
  const swiper = useSwiper()
  return (
    <div
      className="w-16 h-16 bg-slate-400 rounded-md"
      onClick={() => swiper.slideTo(index)}
    >
      {index}
    </div>
  )
}
function HomePage() {
  const platCount = 5
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>()
  return (
    <AppLayout active="service">
      <Swiper spaceBetween={50} slidesPerView={1} autoplay>
        <SwiperSlide>
          <img src="/img/banner_index.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner_index.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner_index.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="white-box p-2 mt-3 mx-2">
        {/* 跑馬燈 */}
        <div className="bg-slate-300 rounded-full flex gap-x-2 py-1 px-2">
          <div className="icon ic_notice"></div>
          <div className="text-gray-700 text-xs overflow-hidden flex-1 whitespace-nowrap">
            <Marquee>
              彩金已重新整理完畢，活動詳情請至優惠活動頁面了解！
              彩金已重新整理完畢，活動詳情請至優惠活動頁面了解！
            </Marquee>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="text-sm">
            <div className="flex gap-1">
              <div className="">ABC12345678</div>
              <div className="icon ic_viplevel text-right pr-2 text-primary-300 italic">
                VIP1
              </div>
            </div>
            <div className="text-primary-500 font-medium">NT123,800.00</div>
          </div>
          <div className="flex flex-1 justify-between pl-2">
            <div className="">
              <div className="icon ic_mid_deposit"></div>
              <div className="text-center text-primary-500 text-sm">帳務</div>
            </div>
            <div className="">
              <div className="icon ic_mid_rank"></div>
              <div className="text-center text-primary-500 text-sm">排行</div>
            </div>
            <div className="">
              <div className="icon ic_mid_movie"></div>
              <div className="text-center text-primary-500 text-sm">影城</div>
            </div>
            <div className="">
              <div className="icon ic_mid_vip"></div>
              <div className="text-center text-primary-500 text-sm">VIP</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-2 mx-2 gap-x-1 min-h-[calc(100vh-370px)]">
        <div className="w-16 h-[calc(100vh-370px)] min-h-[495px] space-y-2">
          <Swiper
            direction="vertical"
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={8}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-16 overflow-hidden h-full"
          >
            {[...Array(8)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="w-16 h-14 bg-slate-400 rounded-md">{i}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex-1 h-[calc(100vh-370px)] min-h-[495px]">
          <Swiper
            direction="vertical"
            spaceBetween={5}
            slidesPerView={1}
            navigation={true}
            mousewheel={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="flex-1 overflow-hidden h-full"
          >
            {[...Array(8)].map((_, gi) => (
              <SwiperSlide key={gi}>
                <div className="grid grid-cols-2 gap-1 h-full">
                  {[...Array(platCount)].map((_, i) => (
                    <div
                      key={i}
                      className={cs(
                        'bg-slate-300 rounded-md',
                        i === 0 && platCount % 2 === 1 && 'col-span-2',
                      )}
                    >
                      {gi}
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </AppLayout>
  )
}

export default HomePage
