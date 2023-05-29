import AppLayout from '@/components/AppLayout'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import React from 'react'

function page() {
  return (
    <AppLayout title="我的帳戶" active="my" pure>
      <div className="flex flex-col items-center bg-gradient-to-b from-[#f0f6fe] from-90% to-transparent -mt-10 pt-10">
        <div className="flex items-center mb-2">
          <div className="icon bg_idphoto flex items-center justify-center">
            <div className="icon img_idphoto"></div>
          </div>
          <div className="text-gray-600 ml-2">
            <div className="font-medium">ABCDDDDDD</div>
            <div className="text-xs">
              上次登入 <span>2023-04-02 11:00</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 mt-[58px] mr-4">
          <div className="icon ic_top_message relative">
            <div className="rounded-full w-2 h-2 bg-red-600 absolute top-0 right-0 -mt-1 -mr-1.5"></div>
          </div>
        </div>
        <div className="bg-white rounded-full text-center py-0.5 text-xs text-gray-500 w-fit px-4">
          晉級所需儲值金額 NT 4,000.00
        </div>
        <div className="flex items-center mt-3 space-x-2">
          <div className="icon ic_viplevel text-yellow-400 text-[13px] italic pl-6">
            VIP3
          </div>
          <div className="loading-bar-base h-2.5 w-[200px] relative">
            <div className="loading-bar-bg h-2 w-[30%]"></div>
            <div className="text-white drop-shadow text-center absolute ml-[45%] top-0 text-sm -mt-1">
              30%
            </div>
          </div>
          <div className="icon ic_viplevel text-yellow-400 text-[13px] italic pl-6">
            VIP4
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="white-box h-20 w-full mx-auto mt-4 flex px-3 items-center">
          <div className="text-yellow-600 font-medium text-[15px]">
            NT128,300.00{' '}
            <div className="icon ic_reload inline-block -mb-1 ml-1"></div>
          </div>
          <div className="flex-1"></div>
          <div className="text-yellow-600 text-xs text-center flex items-center gap-x-2">
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
        <div className="icon btn_a2_base flex items-center justify-center text-yellow-600 tracking-wider mx-auto mt-6">
          登出
        </div>
      </div>
    </AppLayout>
  )
}

export default page
