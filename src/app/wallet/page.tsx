import AppLayout from '@/components/AppLayout'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import React from 'react'

function WalletPage() {
  return (
    <AppLayout title="我的錢包" active="my">
      <div className="px-4 space-y-4">
        <div className="white-box mt-4">
          <WhiteBoxTitle>錢包總額</WhiteBoxTitle>
          <div className="flex items-center px-6 mt-3">
            <div className="">
              <div className="text-primary-500 text-sm font-medium">
                總資產(元)
              </div>
              <div className="text-primary-500 font-semibold text-lg">
                NT123,800.00{' '}
                <div className="icon ic_reload inline-block -mb-2.5 ml-1"></div>
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="sub-btn px-4 py-1">一鍵回收</div>
          </div>
          <div className="flex justify-between px-10 my-3">
            <div className="text-center text-gray-400 text-sm">
              <div className="icon ic_mywallet_deposit"></div>
              <div className="mt-1">存款</div>
            </div>
            <div className="text-center text-gray-400 text-sm">
              <div className="icon ic_mywallet_withdraw"></div>
              <div className="mt-1">取款</div>
            </div>
            <div className="text-center text-gray-400 text-sm">
              <div className="icon ic_mywallet_card"></div>
              <div className="mt-1">卡片</div>
            </div>
          </div>
          <div className="bg-[#eff2f5] text-center py-1 text-sm text-gray-400 rounded-b-lg">
            平台錢包為自動錢包，進入遊戲不必轉點!
          </div>
        </div>
        <div className="white-box mt-4 min-h-[300px] pb-3">
          <WhiteBoxTitle>場館餘額</WhiteBoxTitle>
          <div className="p-3">
            <div className="bg-gradient-to-b from-white to-slate-200 rounded-lg px-6 py-2 flex items-center">
              <div className="flex-1 flex items-center text-gray-500 text-sm">
                <div className="icon ic_mywallet_wallet"></div>
                <div className="ml-2">
                  <div className="">中心錢包</div>
                  <div className="font-semibold">120,600.00</div>
                </div>
              </div>
              <div className="border-r border-gray-400 h-8 mx-5"></div>
              <div className="flex-1 flex items-center text-gray-500 text-sm">
                <div className="icon ic_mywallet_bonus"></div>
                <div className="ml-2">
                  <div className="">可領紅利</div>
                  <div className="font-semibold">3,200.00</div>
                </div>
              </div>
            </div>
            <div className="flex items-center text-xs border-b border-gray-200 mt-1">
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
              <div className="border-r border-gray-200 h-6"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
              <div className="border-r border-gray-200 h-6"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
              <div className="border-r border-gray-200 h-6"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
            </div>
            <div className="flex items-center text-xs border-b border-gray-200">
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
              <div className="border-r border-gray-200 h-6"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
              <div className="border-r border-gray-200 h-6"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
              <div className="border-r border-gray-200 h-6"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
            </div>
            <div className="flex items-center text-xs border-b border-gray-200">
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
              <div className="border-r border-gray-200 h-6"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
              <div className="border-r border-gray-200 h-6"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
              <div className="border-r border-gray-200 h-6"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
            </div>
            <div className="flex items-center text-xs border-b border-gray-200">
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
              <div className="border-r border-gray-200 h-6"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
              <div className="border-r border-gray-200 h-6"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
              <div className="border-r border-gray-200 h-6"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="icon logo_alive_wm -mb-2.5"></div>
                <div className="text-gray-500">WM</div>
                <div className="text-primary-500">300.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default WalletPage
