'use-client'

import React from 'react'
import cs from 'classnames'

type Props = {
  active?: 'payment' | 'service' | 'my' | 'promotion'
}
function AppFooter({ active }: Props) {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="bg-[url('/img/bg_basebtn.png')] bg-contain bg-center h-[80px] bg-no-repeat">
        <div className="icon ic_base_logo mx-auto relative top-[-20px]"></div>
      </div>
      <div className="flex items-end absolute bottom-0 mb-2 w-full px-3 text-gray-500 font-medium">
        <div className="flex flex-col items-center w-1/5">
          <div className="icon ic_base_event"></div>
          <div>優惠</div>
        </div>
        <div className="flex flex-col items-center w-1/5">
          <div
            className={cs(
              'icon mb-1',
              active === 'payment'
                ? 'ic_base_deposit_on'
                : 'ic_base_deposit_off',
            )}
          ></div>
          <div>存取款</div>
        </div>
        <div className="flex flex-col items-center w-1/5">
          <div className="h-[23px] mb-1"></div>
          <div>首頁</div>
        </div>
        <div className="flex flex-col items-center w-1/5">
          <div
            className={cs(
              'icon mb-1',
              active === 'service'
                ? 'ic_base_service_on'
                : 'ic_base_service_off',
            )}
          ></div>
          <div>客服</div>
        </div>
        <div className="flex flex-col items-center w-1/5">
          <div
            className={cs(
              'icon mb-1',
              active === 'my' ? 'ic_base_my_on' : 'ic_base_my_off',
            )}
          ></div>
          <div>我的</div>
        </div>
      </div>
    </div>
  )
}

export default AppFooter
