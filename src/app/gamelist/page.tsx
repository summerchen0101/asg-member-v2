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
import { MdSearch } from 'react-icons/md'
import TabGroup from '@/components/TabGroup'
import { mapToOpts } from '@/utils'
import RadioBtns from '@/components/RadioBtns'

const cgyMap = { SLOT: '老虎機', FISH: '捕魚機', STREET: '街機' }
function GameListPage() {
  const platCount = 15
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>()
  const [currentPlat, setCurrentPlat] = useState(0)
  const [currentCgy, setCurrentCgy] = useState('SLOT')
  const [currentTab, setCurrentTab] = useState<string>('all')
  return (
    <AppLayout title="遊戲列表">
      <div className="p-2">
        <img src="/img/bn_slottop1.jpg" alt="" className="rounded-md" />
      </div>
      <div className="bg-slate-200 rounded-full flex mx-4 px-2 py-1 items-center">
        <div className="flex-1">
          <input
            type="text"
            className="border-none outline-none w-full h-6 bg-transparent placeholder:text-gray-400 text-sm"
            placeholder="搜尋遊戲 例如:財神"
          />
        </div>
        <MdSearch className="text-lg" />
      </div>
      <TabGroup
        options={mapToOpts({ all: '全部', hot: '熱門' })}
        value={currentTab}
        onChange={(val) => setCurrentTab(val as string)}
      />
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
            {[...Array(4)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="">
                  {i === currentPlat ? (
                    <div className="icon ic_fishing_left_zg_on"></div>
                  ) : (
                    <div className="icon ic_fishing_left_zg_off flex items-end justify-center pb-2 text-gray-500 font-medium text-sm">
                      ZG
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex-1 h-[calc(100vh-370px)] min-h-[495px] px-2">
          <RadioBtns
            className="mb-2"
            options={mapToOpts(cgyMap)}
            value={currentCgy}
            onChange={(val) => setCurrentCgy(val as string)}
          />
          <Swiper
            direction="vertical"
            spaceBetween={5}
            slidesPerView={1}
            navigation={true}
            mousewheel={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="flex-1 overflow-hidden h-full"
            onSlideChange={(s) => setCurrentPlat(s.activeIndex)}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {[...Array(8)].map((_, gi) => (
              <SwiperSlide key={gi} className="overflow-y-auto">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {[...Array(platCount)].map((_, i) => (
                    <div key={i} className="w-full aspect-square flex flex-col">
                      <div className="bg-slate-300 rounded-2xl w-full aspect-square overflow-hidden">
                        <img src="https://fakeimg.pl/150x150/" alt="" />
                      </div>
                      <div className="mt-1 text-center text-sm text-gray-700">
                        赤壁之战
                      </div>
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

export default GameListPage
