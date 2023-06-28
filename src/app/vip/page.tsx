import AppLayout from '@/components/AppLayout'
import MyInfo from '@/components/MyInfo'
import VipCard from '@/components/VipCard'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import React from 'react'

function page() {
  return (
    <AppLayout title="VIP特權" active="my" pure>
      <MyInfo />
      <div className="overflow-x-auto snap-x">
        <div className="w-max flex items-center px-8">
          {[...Array(11)].map((_, i) => (
            <VipCard
              key={i}
              img={`/img/card_vip${i + 1}.png`}
              is_lock
              total_deposit={20000}
              keep_deposit={5000}
            />
          ))}
        </div>
      </div>
      <div className="px-4">
        <div className="white-box min-h-[300px] mt-4">
          <WhiteBoxTitle
            addonAfter={<div className="sub-btn px-2 py-0.5">VIP詳情</div>}
          >
            尊享權益
          </WhiteBoxTitle>
          <div className="px-2 py-2 pb-8">
            <div className="flex justify-between bg-gradient-to-b from-slate-100 to-white px-6 rounded-lg py-6">
              <div className="flex flex-col items-center">
                <div className="icon ic_vip_bo1"></div>
                <div className="text-gray-600 text-xl font-semibold">10%</div>
                <div className="text-primary-500 text-sm">復仇金</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="icon ic_vip_bo2"></div>
                <div className="text-gray-600 text-xl font-semibold">500</div>
                <div className="text-primary-500 text-sm">呼朋引伴</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="icon ic_vip_bo3"></div>
                <div className="text-gray-600 text-xl font-semibold">168</div>
                <div className="text-primary-500 text-sm">升級禮金</div>
              </div>
            </div>
            <div className="flex justify-between bg-gradient-to-b from-slate-100 to-white px-6 rounded-lg py-6">
              <div className="flex flex-col items-center">
                <div className="icon ic_vip_bo4"></div>
                <div className="text-gray-600 text-xl font-semibold">0.3%</div>
                <div className="text-primary-500 text-sm">天天返水</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="icon ic_vip_bo5"></div>
                <div className="text-gray-600 text-xl font-semibold">168</div>
                <div className="text-primary-500 text-sm">每週紅包</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="icon ic_vip_bo6"></div>
                <div className="text-gray-600 text-xl font-semibold">168</div>
                <div className="text-primary-500 text-sm">生日禮金</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default page
