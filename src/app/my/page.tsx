import AppLayout from '@/components/AppLayout'
import MyInfo from '@/components/MyInfo'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import React from 'react'

function page() {
  return (
    <AppLayout title="我的帳戶" active="my" pure>
      <MyInfo />
      <div className="px-4">
        <div className="white-box h-20 w-full mx-auto mt-4 flex px-3 items-center">
          <div className="text-primary-500 font-medium text-[15px]">
            NT128,300.00{' '}
            <div className="icon ic_reload inline-block -mb-1 ml-1"></div>
          </div>
          <div className="flex-1"></div>
          <div className="text-primary-500 text-xs text-center flex items-center gap-x-2">
            <div className="">
              <div className="icon ic_mid_deposit"></div>
              <div className="mt-1">帳務</div>
            </div>
            <div className="">
              <div className="icon ic_mid_rank"></div>
              <div className="mt-1">排行</div>
            </div>
            <div className="">
              <div className="icon ic_mid_movie"></div>
              <div className="mt-1">影城</div>
            </div>
            <div className="">
              <div className="icon ic_mid_vip"></div>
              <div className="mt-1">VIP</div>
            </div>
          </div>
        </div>
        <div className="white-box min-h-[300px] mt-4">
          <WhiteBoxTitle>我的功能</WhiteBoxTitle>
          <div className="grid grid-cols-4 px-1 py-4 pb-8 gap-y-6">
            <div className="flex flex-col items-center">
              <div className="icon ic_my_accout mb-1"></div>
              <div className="text-gray-400 text-sm">個人資料</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon ic_my_wallet mb-1"></div>
              <div className="text-gray-400 text-sm">我的錢包</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon ic_my_bonus mb-1"></div>
              <div className="text-gray-400 text-sm">紅利禮包</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon ic_my_event mb-1"></div>
              <div className="text-gray-400 text-sm">限時優惠</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon ic_my_live mb-1"></div>
              <div className="text-gray-400 text-sm">直播</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon ic_my_message mb-1"></div>
              <div className="text-gray-400 text-sm">訊息中心</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon ic_my_join mb-1"></div>
              <div className="text-gray-400 text-sm">加入我們</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon ic_my_store mb-1"></div>
              <div className="text-gray-400 text-sm">線上商城</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon ic_my_about mb-1"></div>
              <div className="text-gray-400 text-sm">關於我們</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon ic_my_app mb-1"></div>
              <div className="text-gray-400 text-sm">下載APP</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon ic_my_lesson mb-1"></div>
              <div className="text-gray-400 text-sm">新手教程</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="icon ic_my_help mb-1"></div>
              <div className="text-gray-400 text-sm">幫助中心</div>
            </div>
          </div>
        </div>
        <div className="icon btn_a2_base flex items-center justify-center text-primary-600 tracking-wider mx-auto mt-6">
          登出
        </div>
      </div>
    </AppLayout>
  )
}

export default page
