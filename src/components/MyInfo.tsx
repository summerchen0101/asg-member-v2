'use client'
import React from 'react'

function MyInfo() {
  return (
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
  )
}

export default MyInfo
